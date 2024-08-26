import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { AddressEntity } from './address.entity';
import { OrganizationEntity } from './organization.entity';

@Entity('school')
export class SchoolEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  status: string;

  @Column('time')
  startTime: string;

  @Column('time')
  endTime: string;

  @Column()
  shift: string;

  @OneToOne(() => AddressEntity)
  @JoinColumn({ name: 'address_id' })
  address: AddressEntity;

  @Column({ default: false })
  hasProjector: boolean;

  @Column({ default: false })
  hasLaptop: boolean;

  @OneToOne(() => OrganizationEntity)
  @JoinColumn({ name: 'organization_id' })
  organization: OrganizationEntity;
}
