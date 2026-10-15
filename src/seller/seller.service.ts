import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { SellerRepository } from './seller.repository.js';
import { CreateSellerDto } from './dto/create-seller.dto.js';
import { Seller } from './entities/seller.entity.js';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SellerService {
  constructor(private readonly sellerRepository: SellerRepository) {}

  async create(createSellerDto: CreateSellerDto): Promise<Seller> {
  
    const emailExists = await this.sellerRepository.exists({
      where: { email: createSellerDto.email },
    });
  
    if (emailExists) {
      throw new ConflictException('Este email já está cadastrado.');
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(createSellerDto.password, saltRounds);
    
    const seller = this.sellerRepository.create({
      ...createSellerDto,
      password: hashedPassword,
    });

    return await this.sellerRepository.save(seller);
  }

  async findAll(): Promise<Seller[]> {
    return await this.sellerRepository.find();
  }

  async findOne(id: number): Promise<Seller> {
    const seller = await this.sellerRepository.findOneBy({ id });
    if (!seller) {
      throw new NotFoundException(`Vendedor com ID ${id} não encontrado.`);
    }
    return seller;
  }
}