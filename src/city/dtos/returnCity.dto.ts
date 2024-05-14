import { ReturnStateDTO } from 'src/state/dtos/returnState.dto';
import { CityEntity } from '../entities/city.entity';

export class ReturnCityDTO {
  name: string;
  state: ReturnStateDTO;

  constructor(cityEntity: CityEntity) {
    this.name = cityEntity.name;
    this.state = cityEntity.state
      ? new ReturnStateDTO(cityEntity.state)
      : undefined;
  }
}
