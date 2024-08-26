import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SchoolEntity } from './entities/school.entity';
import { AddressEntity } from './entities/address.entity';
import { OrganizationEntity } from './entities/organization.entity';
import { CreateSchoolDto, SchoolDto } from './dto/create-school.dto';

@Injectable()
export class SchoolService {
  constructor(
    @InjectRepository(SchoolEntity)
    private schoolRepository: Repository<SchoolEntity>,
    @InjectRepository(AddressEntity)
    private addressRepository: Repository<AddressEntity>,
    @InjectRepository(OrganizationEntity)
    private organizationRepository: Repository<OrganizationEntity>
  ) {}

  async     createSchool(schoolData: CreateSchoolDto): Promise<void> {
    const { name, status, startTime, endTime, shift, hasProjector, hasLaptop, organization } = schoolData;

    const address = new AddressEntity();
    Object.assign(address, schoolData.address);

    const org = new OrganizationEntity();
    Object.assign(org, organization);

    const school = new SchoolEntity();
    Object.assign(school, { name, status, startTime, endTime, shift, hasProjector, hasLaptop });


    const savedAddress = await this.addressRepository.save(address);
    const savedOrdization = await this.organizationRepository.save(org);

    school.address = savedAddress;
    school.organization = savedOrdization

    await this.schoolRepository.save(school);
  }

  async updateSchool(id: number, schoolData: SchoolDto): Promise<void> {
    const { name, status, startTime, endTime, shift, hasProjector, hasLaptop, organization } = schoolData;

    const school = await this.schoolRepository.findOne( {where: {id}});
    if (!school) {
      throw new Error('School not found');
    }

    Object.assign(school, { name, status, startTime, endTime, shift, hasProjector, hasLaptop });

    await this.schoolRepository.save(school);

    const address = await this.addressRepository.findOne({where: {id: school?.address?.id}});
    if (address) {
      Object.assign(address, schoolData.address);
      await this.addressRepository.save(address);
    }

    const org = await this.organizationRepository.findOne({where: {id: school?.organization?.id}});
    if (org) {
      Object.assign(org, organization);
      await this.organizationRepository.save(org);
    }
  }

  async getSchoolById(id: number): Promise<SchoolEntity> {
    return this.schoolRepository.findOne({where: {id}, relations: {
        organization: true,
        address: true
    }});
  }

  async getAllSchools(): Promise<SchoolEntity[]> {
    return this.schoolRepository.find({
        relations: {
            organization: true,
            address: true
            }
    });
  }

  async deleteSchool(id: number): Promise<void> {
    await this.schoolRepository.delete(id);
  }
}
