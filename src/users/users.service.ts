import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDataDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users)
    private userModel: typeof Users,
  ) {}
  users = [{ name: 'ivan', position: 'sd3', id: 1, salary: 500 }];
  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    console.log(typeof id);
    return this.users.find((user) => user.id === id);
  }

  async createUser(createUserDto: CreateUserDto) {
    try {
      await this.userModel.create({
        ...createUserDto,
      });
      return true;
    } catch (error) {
      console.log(error);
    }
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
