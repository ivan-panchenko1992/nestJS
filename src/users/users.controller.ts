import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Redirect,
  HttpCode,
  HttpStatus,
  Header,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  @Get('all')
  @Redirect('https://www.example.com', 301)
  getAllUsers(@Req() req: Request, @Res() res: Response) {
    res.status(200).send('hhelo');
    return ['hello', 'new', 'one'];
  }
  @Get(':userId')
  @Header('operationId', '1234')
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
  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return {
      name: createUserDto.name,
      position: createUserDto.position,
      salary: createUserDto.salary,
    };
  }
  @Put(':id')
  updateUser(@Body() updateUserDto: UpdateUserDto) {
    return {
      position: updateUserDto.position,
      salary: updateUserDto.salary,
    };
  }
}
