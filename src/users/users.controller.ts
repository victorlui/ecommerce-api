import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUsers } from './dtos/createUsers.dto';
import { UsersService } from './users.service';
import { ReturnUsersDTO } from './dtos/returnUsers.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async createUsers(@Body() user: CreateUsers) {
    return this.userService.createUser(user);
  }

  @Get()
  async getAllUsers(): Promise<ReturnUsersDTO[]> {
    return (await this.userService.getAllUsers()).map(
      (users) => new ReturnUsersDTO(users),
    );
  }

  @Get('/:id')
  async getUserById(@Param('id') id: number): Promise<ReturnUsersDTO> {
    return new ReturnUsersDTO(await this.userService.getUserByRelations(id));
  }
}
