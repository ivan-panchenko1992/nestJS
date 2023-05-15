import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('all')
  getAllUsers() {
    return ['hello', 'new', 'one'];
  }
  @Get(':userId')
  getUserById(@Param('userId') userId) {
    return {
      name: 'Ivan',
      position: 'SD3',
      userId,
    };
  }
  @Get('with-params/:userId')
  getUserWithParams(@Param() params) {
    return {
      name: 'Ivan',
      position: 'SD3',
      userId: params.userId,
    };
  }
}
