import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('address')
export class AddressEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  town: string;

  @Column()
  tehsil: string;

  @Column()
  district: string;

  @Column()
  state: string;

  @Column('text')
  address: string;

  @Column('numeric', { precision: 10, scale: 8 })
  latitude: number;

  @Column('numeric', { precision: 11, scale: 8 })
  longitude: number;
}
