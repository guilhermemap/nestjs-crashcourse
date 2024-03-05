import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';

@Controller('user')
export class UserController {
  @Get('all')
  findAll() {
    return 'all users';
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return {
      user: {
        id: id,
      },
    };
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return `this route is for creating a user called ${createUserDto.name} with email ${createUserDto.email}`;
  }
}
