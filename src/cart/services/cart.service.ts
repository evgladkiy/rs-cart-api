import { Injectable } from '@nestjs/common';
import { PostgresClientService } from 'src/shared/services/postgresClientService';
import { ProductsService } from 'src/shared/services/productsService';
import { Cart, CartItem } from '../models';

@Injectable()
export class CartService {

  constructor (
      private postgresClient: PostgresClientService,
      private productsService: ProductsService) {}

  private userCarts: Record<string, Cart> = {};

  findByUserId(userId: string): Cart {
    return this.userCarts[ userId ];
  }

  async createByUserId(userId: string): Promise<Cart> {
    const card = await this.postgresClient.query(`insert into carts (user_id) values('${userId}')`);

    const userCart = {
      id: card.id,
      items: [],
    };

    return userCart;
  }

  async findOrCreateByUserId(userId: string): Promise<Cart> {
    const [ userCart ] = await this.postgresClient.query(`
      SELECT * FROM carts where user_id='${userId}'`
    );
  
    if (userCart) {
      const userCartItems = await this.postgresClient.query(`
        SELECT * FROM cart_items where cart_id='${userCart.id}'`
      );
    
      const items: Array<CartItem> = await Promise.all(userCartItems.map(async (cartItem) => {
        const product = await this.productsService.getProductById(cartItem.product_id);
        return {
          product,
          count: cartItem.count,
        }
      }));
      return {
        items,
        id: userCart.id,
      };
    }
  
    return this.createByUserId(userId);
  }

  async updateByUserId(userId: string, {product, count}: any): Promise<Cart> {
    const { id, items } = await this.findOrCreateByUserId(userId);
    const userCartItems = await this.postgresClient.query(`
      SELECT * FROM cart_items where cart_id='${id}'`
    );
    
    const [ userCart ] = await this.postgresClient.query(`
      SELECT * FROM carts where user_id='${userId}'`
    );
  
    if (!userCartItems) {
      await this.postgresClient.query(`
        insert into carts (user_id) values
        ('${userId}')`,
      );
    }

    const cartProduct = userCartItems.find(item => item.product_id === product.id);
    
    if (cartProduct) {
      await this.postgresClient.query(
        `UPDATE cart_items SET count=${count} WHERE id='${cartProduct.id}'`,
      );
    } else {
      await this.postgresClient.query(`
        insert into cart_items (product_id, cart_id, count) values
        ('${product.id}', '${userCart.id}', ${1})`,
      );
    }

    return {
      id: userCart.id,
      items: items.map(x => x.product.id === product.id ? {
        product,
        count
      } : x)
    }
  }

  removeByUserId(userId): void {
    this.userCarts[ userId ] = null;
  }

}
