import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUsers } from './dtos/createUsers.dto';

@Controller('users')
export class UsersController {
  @Post()
  async createUsers(@Body() user: CreateUsers) {
    return user;
  }

  @Get()
  async getAllUsers() {
    return JSON.stringify({ name: 'Victor Luiz' });
  }
}
