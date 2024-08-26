import { Module } from '@nestjs/common';
import { SchoolModule } from './school/school.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolEntity } from './school/entities/school.entity';
import { AddressEntity } from './school/entities/address.entity';
import { OrganizationEntity } from './school/entities/organization.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5431,
    //   username: 'root',
    //   password: 'admin',
    //   database: 'new1',
    //   entities: [SchoolEntity, AddressEntity, OrganizationEntity],
    //   synchronize: true,
    // }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [SchoolEntity, AddressEntity, OrganizationEntity],
        synchronize: true,
      }),
    }),
    SchoolModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
