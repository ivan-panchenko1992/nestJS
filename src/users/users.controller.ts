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
  Header,
  BadRequestException,
  ParseIntPipe,
  UsePipes,
} from '@nestjs/common';
import { CreateUserDto, createUserSchema } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
import { ValidationPipePipe } from 'src/validation-pipe/validation-pipe.pipe';

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
  async getUserById(@Param('userId', ParseIntPipe) userId: number) {
    try {
      const result = await this.userService.getUserById(userId);
      console.log(result);
      if (!result) {
        throw new BadRequestException('User not found', {
          cause: new Error(),
        });
      }
      return result;
    } catch (error) {
      throw new BadRequestException('User not found', {
        cause: new Error(),
      });
    }
  }
  @Get('with-params/:userId')
  getUserWithParams(@Param() params) {
    return this.userService.getUserById(+params.userId);
  }
  @Post('/')
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ValidationPipePipe(createUserSchema))
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
