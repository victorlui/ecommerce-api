import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginDTO } from './dtos/login.dto';
import { UsersEntity } from 'src/users/interfaces/user.entity';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ReturnUsersDTO } from 'src/users/dtos/returnUsers.dto';
import { ReturnLoginDTO } from './dtos/returnLogin.dto';
import { LoginPayloadDTO } from './dtos/loginPayload.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtServer: JwtService,
  ) {}

  async login(loginDto: LoginDTO): Promise<ReturnLoginDTO> {
    const user: UsersEntity | undefined = await this.userService
      .findByEmail(loginDto.email)
      .catch(() => undefined);

    const isMatch = await compare(loginDto.password, user.password || '');

    if (!user || !isMatch) {
      throw new NotFoundException('E-mail ou senha inválido');
    }

    return {
      accessToken: this.jwtServer.sign({
        ...new LoginPayloadDTO(user),
      }),
      user: new ReturnUsersDTO(user),
    };
  }
}
