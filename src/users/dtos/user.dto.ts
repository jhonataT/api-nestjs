/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger"

export class UserDto {
    
    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    hour: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    hasAccess: boolean;
}