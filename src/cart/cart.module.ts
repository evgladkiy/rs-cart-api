import { Module } from '@nestjs/common';
import { SharedModule } from 'src/shared/shared.module';

import { OrderModule } from '../order/order.module';

import { CartController } from './cart.controller';
import { CartService } from './services';


@Module({
  imports: [ OrderModule, SharedModule ],
  providers: [ CartService ],
  controllers: [ CartController ]
})
export class CartModule {}
