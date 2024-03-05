import { Controller, Get, Param } from '@nestjs/common';

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
}
