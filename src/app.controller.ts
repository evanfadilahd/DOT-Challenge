import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('users')
export class UsersController {

  @Get()
  @Render('users/index')
  getUsers() {
    return {
      title: 'User List',
      users: [],
    };
  }
}
