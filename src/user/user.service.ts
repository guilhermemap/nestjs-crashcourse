import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';

@Injectable()
export class UserService {
  findOne(id: number) {
    return {
      id: id,
    };
  }
  create(user: CreateUserDto) {
    return user;
  }
}
