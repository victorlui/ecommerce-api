import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { LoginDTO } from './dtos/login.dto';
import { ReturnUsersDTO } from 'src/users/dtos/returnUsers.dto';
import { AuthService } from './auth.service';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async login(@Body() login: LoginDTO): Promise<ReturnUsersDTO> {
    return new ReturnUsersDTO(await this.authService.login(login));
  }
}
