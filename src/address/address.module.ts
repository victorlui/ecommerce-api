import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { UsersModule } from 'src/users/users.module';
import { CityModule } from 'src/city/city.module';

@Module({
  imports: [TypeOrmModule.forFeature([AddressEntity]), UsersModule, CityModule],
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {}
