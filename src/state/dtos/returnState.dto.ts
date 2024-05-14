import { StateEntity } from '../entities/state.entity';

export class ReturnStateDTO {
  name: string;
  uf: string;

  constructor(stateEntity: StateEntity) {
    this.name = stateEntity.name;
    this.uf = stateEntity.uf;
  }
}
