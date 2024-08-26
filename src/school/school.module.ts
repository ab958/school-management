import { Module } from '@nestjs/common';
import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolEntity } from './entities/school.entity';
import { OrganizationEntity } from './entities/organization.entity';
import { AddressEntity } from './entities/address.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SchoolEntity, OrganizationEntity,AddressEntity])
  ],
  controllers: [SchoolController],
  providers: [SchoolService],
})
export class SchoolModule {}
