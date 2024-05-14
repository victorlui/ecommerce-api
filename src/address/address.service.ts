import { Injectable } from '@nestjs/common';
import { AddressEntity } from './entities/address.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDTO } from './dtos/createAddress.dto';
import { UsersService } from 'src/users/users.service';
import { CityService } from 'src/city/city.service';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
    private readonly userService: UsersService,
    private readonly cityService: CityService,
  ) {}

  async createAddress(address: CreateAddressDTO, userId: number) {
    await this.userService.getUserById(userId);
    await this.cityService.findCityById(address.cityId);
    return this.addressRepository.save({
      ...address,
      userId,
    });
  }
}
