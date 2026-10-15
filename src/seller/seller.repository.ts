import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Seller } from './entities/seller.entity';

@Injectable()
export class SellerRepository extends Repository<Seller> {
  constructor(private dataSource: DataSource) {
    super(Seller, dataSource.createEntityManager());
  }
}