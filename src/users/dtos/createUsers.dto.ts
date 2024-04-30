import { IsEmail, IsString } from 'class-validator';

export class CreateUsers {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  cpf: string;

  @IsString()
  phone: string;

  @IsString()
  password: string;
}
