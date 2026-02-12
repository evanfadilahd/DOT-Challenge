import { Controller, Get, Render } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    @Render('users/index')
    async findAll() {
        const users = await this.usersService.getUsers();
        return { users };
    }
}