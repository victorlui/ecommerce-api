import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUsers } from './dtos/createUsers.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async createUsers(@Body() user: CreateUsers) {
    return this.userService.createUser(user);
  }

  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }
}
