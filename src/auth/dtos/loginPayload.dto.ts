import { UsersEntity } from 'src/users/interfaces/user.entity';

export class LoginPayloadDTO {
  id: number;
  typeUser: number;

  constructor(user: UsersEntity) {
    this.id = user.id;
    this.typeUser = user.typeUser;
  }
}
