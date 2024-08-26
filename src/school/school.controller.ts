import { Controller, Get, Post, Param, Body, Delete, Patch } from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto, SchoolDto } from './dto/create-school.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('School')
@Controller('schools')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Post()
  async create(@Body() schoolData: CreateSchoolDto): Promise<any> {
    await this.schoolService.createSchool(schoolData);
    return { message: 'School created successfully' };
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() schoolData: SchoolDto): Promise<any> {
    await this.schoolService.updateSchool(Number(id),schoolData);
    return { message: 'School updated successfully' };
  }

  @Get(':id')
  async getSchool(@Param('id') id: string): Promise<any> {
    const school = await this.schoolService.getSchoolById(Number(id));
    return school ? school : { message: 'School not found' };
  }

  @Get()
  async getAllSchools(): Promise<any> {
    const schools = await this.schoolService.getAllSchools();
    return schools.length > 0 ? schools : { message: 'No schools found' };
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    await this.schoolService.deleteSchool(Number(id));
    return { message: 'School deleted successfully' };
  }
}
