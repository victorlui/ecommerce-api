import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsers } from './dtos/createUsers.dto';
import { UsersEntity } from './interfaces/user.entity';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
  ) {}

  async createUser(user: CreateUsers): Promise<UsersEntity> {
    const saltOrRounds = 10;
    const password = user.password;
    const hash = await bcrypt.hash(password, saltOrRounds);

    return this.userRepository.save({
      ...user,
      typeUser: 1,
      password: hash,
    });
  }

  async getAllUsers(): Promise<UsersEntity[]> {
    return this.userRepository.find();
  }

  async getUserByRelations(id: number): Promise<UsersEntity> {
    return await this.userRepository.findOne({
      where: {
        id,
      },
      relations: {
        addresses: {
          city: {
            state: true,
          },
        },
      },
    });
  }

  async getUserById(id: number): Promise<UsersEntity> {
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user;
  }
}
