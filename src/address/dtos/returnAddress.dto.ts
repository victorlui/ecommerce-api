import { ReturnCityDTO } from 'src/city/dtos/returnCity.dto';
import { AddressEntity } from '../entities/address.entity';

export class ReturnAddressDTO {
  complement: string;
  numberAddress: number;
  cep: string;
  city?: ReturnCityDTO;

  constructor(address: AddressEntity) {
    this.complement = address.complement;
    this.cep = address.cep;
    this.numberAddress = address.numberAddress;
    this.city = address.city ? new ReturnCityDTO(address.city) : undefined;
  }
}
