import { Controller, Get, Param, Post, Body } from '@nestjs/common';

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
  create(@Body('name') name: string) {
    return 'this route is for creating a user called ' + name;
  }
}
