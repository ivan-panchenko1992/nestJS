import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  // Redirect,
  HttpCode,
  HttpStatus,
  HttpException,
  Header,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('all')
  // @Redirect('https://www.example.com', 301)
  getAllUsers() {
    return this.userService.getAllUsers();
  }
  @Get(':userId')
  @Header('operationId', '1234')
  async getUserById(@Param('userId') userId) {
    try {
      const result = await this.userService.getUserById(Number(userId));
      console.log(result);
      if (!result) {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: 'Something went wrong, please try again',
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      return result;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Something went wrong, please try again',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }
  @Get('with-params/:userId')
  getUserWithParams(@Param() params) {
    return this.userService.getUserById(+params.userId);
  }
  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser({
      name: createUserDto.name,
      position: createUserDto.position,
      salary: createUserDto.salary,
    });
  }
  @Put(':id')
  updateUser(@Body() updateUserDto: UpdateUserDto, @Param('id') id: number) {
    return this.userService.updateUSer({
      ...updateUserDto,
      id: +id,
    });
  }
}
