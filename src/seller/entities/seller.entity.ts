import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity('sellers')
export class Seller implements ISeller {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  photo: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}