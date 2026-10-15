import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IClient, IAddres } from '../../@types/client';


@Entity('clients')
export class Client implements IClient {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  document: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ type: 'date', nullable: true })
  dateOfBirth?: Date | string;

  @Column('jsonb', { nullable: true })
  address: Array<IAddres>;

  @Column()
  password: string;
}