import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Category } from '../../categoty/entities/category.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('float', { default: 5.0 })
  rating: number;

  @ManyToOne(()=>Category)
  category: Category;

  @Column()
  photo: string;

  @Column({ nullable: true })
  description: string;
}