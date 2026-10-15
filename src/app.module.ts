import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClientModule } from './client/client.module';
import { ProductModule } from './product/product.module';
import { SellerModule } from './seller/seller.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Jhonatan12',
      database: 'velloe',
      autoLoadEntities: true, 
      synchronize: true,    
    }),
    ClientModule,
    ProductModule,
    CategoryModule,
    SellerModule,
  ],
})
export class AppModule {}