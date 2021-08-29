import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { UserDto } from '../dtos/user.dto';
import { User } from '../interfaces/user.interface';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    index(): User[] {
        return this.usersService.findAll();
    }

    @Post()
    @ApiBody({ type: UserDto })
    create(@Body() user: UserDto): User {
        return this.usersService.create(user);
    }
}
