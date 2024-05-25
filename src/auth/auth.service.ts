import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginDTO } from './dtos/login.dto';
import { UsersEntity } from 'src/users/interfaces/user.entity';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async login(loginDto: LoginDTO): Promise<UsersEntity> {
    const user: UsersEntity | undefined = await this.userService
      .findByEmail(loginDto.email)
      .catch(() => undefined);

    const isMatch = await compare(loginDto.password, user.password || '');

    if (!user || !isMatch) {
      throw new NotFoundException('E-mail ou senha inválido');
    }

    return user;
  }
}
