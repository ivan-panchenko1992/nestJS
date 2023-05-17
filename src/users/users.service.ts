import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDataDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  users = [{ name: 'ivan', position: 'sd3', id: 1, salary: 500 }];
  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    console.log(typeof id);
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto) {
    this.users = [...this.users, createUserDto];
    return true;
  }
  updateUSer(updateUserDto: UpdateUserDataDto) {
    this.users = this.users.map((el) => {
      if (el.id === updateUserDto.id) {
        return {
          ...el,
          ...updateUserDto,
        };
      }
      return el;
    });
  }
}
