import { Controller, Get, Delete, Put, Body, Req, Post, HttpStatus, Header } from '@nestjs/common';

// import { BasicAuthGuard, JwtAuthGuard } from '../auth';
import { OrderService } from '../order';
import { AppRequest, getUserIdFromRequest } from '../shared';

import { calculateCartTotal } from './models-rules';
import { CartService } from './services';

@Controller('api/profile/cart')
export class CartController {
  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) {
   }

  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  async findUserCart() {
    const cart = await this.cartService.findOrCreateByUserId(getUserIdFromRequest());

    return {
      data: cart.items,
      total: Math.floor(calculateCartTotal(cart) * 100) /100
    }
  }

  @Put()
  async updateUserCart(@Req() req: AppRequest, @Body() body) { // TODO: validate body payload...
    const cart = await this.cartService.updateByUserId(getUserIdFromRequest(), body)
    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: {
        cart,
        total: calculateCartTotal(cart),
      }
    }
  }

  @Delete()
  clearUserCart(@Req() req: AppRequest) {
    this.cartService.removeByUserId(getUserIdFromRequest());

    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
    }
  }

  @Post('checkout')
  checkout(@Req() req: AppRequest, @Body() body) {
    const userId = getUserIdFromRequest();
    const cart = this.cartService.findByUserId(userId);

    if (!(cart && cart.items.length)) {
      const statusCode = HttpStatus.BAD_REQUEST;
      req.statusCode = statusCode

      return {
        statusCode,
        message: 'Cart is empty',
      }
    }

    const { id: cartId, items } = cart;
    const total = calculateCartTotal(cart);
    const order = this.orderService.create({
      ...body, // TODO: validate and pick only necessary data
      userId,
      cartId,
      items,
      total,
    });
    this.cartService.removeByUserId(userId);

    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: { order }
    }
  }
}
