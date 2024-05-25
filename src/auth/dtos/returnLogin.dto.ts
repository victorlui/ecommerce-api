import { ReturnUsersDTO } from 'src/users/dtos/returnUsers.dto';

export interface ReturnLoginDTO {
  user: ReturnUsersDTO;
  accessToken: string;
}
