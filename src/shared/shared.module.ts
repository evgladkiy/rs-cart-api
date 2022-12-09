import { Module } from '@nestjs/common';
import { PostgresClientService } from './services/postgresClientService';
import { ProductsService } from './services/productsService';

@Module({
  providers: [ PostgresClientService, ProductsService ],
  exports: [ PostgresClientService, ProductsService ]
})
export class SharedModule {}
