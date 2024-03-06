import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findOne(id: number) {
    return await this.userRepository.findOne({ where: { id: id } });
  }
  async create(userDto: CreateUserDto) {
    const user = await this.userRepository.create(userDto);
    return await this.userRepository.save(user);
  }
}
