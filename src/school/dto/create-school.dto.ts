import { ApiProperty } from "@nestjs/swagger";


class AddressDto {
    @ApiProperty()
    town: string;

    @ApiProperty()
    tehsil: string;

    @ApiProperty()
    district: string;

    @ApiProperty()
    state: string;

    @ApiProperty()
    address: string;

    @ApiProperty()
    latitude: number;

    @ApiProperty()
    longitude: number;
}

class OrganizationDto {
    @ApiProperty()
    name: string;
}

class UpdateAddressDto extends AddressDto {
    @ApiProperty()
    id: number
}

class UpdateOrganizationDto extends OrganizationDto{
    @ApiProperty()
    id: number
}

export class CreateSchoolDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    status: string;

    @ApiProperty()
    startTime: string;

    @ApiProperty()
    endTime: string;

    @ApiProperty()
    shift: string;

    @ApiProperty()
    hasProjector: boolean;

    @ApiProperty()
    hasLaptop: boolean;

    @ApiProperty()
    address: AddressDto;

    @ApiProperty()
    organization: OrganizationDto;
}

export class SchoolDto extends CreateSchoolDto{
    @ApiProperty({type: UpdateAddressDto})
    address: UpdateAddressDto;

    @ApiProperty({type: UpdateOrganizationDto})
    organization: UpdateOrganizationDto;
}
