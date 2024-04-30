import { UsersEntity } from '../interfaces/user.entity';

export class ReturnUsersDTO {
  id: number;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  typeUser: number;

  constructor(userEntitty: UsersEntity) {
    this.id = userEntitty.id;
    this.name = userEntitty.name;
    this.cpf = userEntitty.cpf;
    this.email = userEntitty.email;
    this.phone = userEntitty.phone;
    this.typeUser = userEntitty.typeUser;
  }
}
