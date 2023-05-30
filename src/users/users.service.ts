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
  async getAllUsers() {
    return await this.userModel.findAll();
  }

  async getUserById(id: number) {
    try {
      const user = await this.userModel.findOne({
        where: {
          id,
        },
        raw: true,
      });
      if (user) {
        return user;
      }
      return null;
    } catch (error) {
      return null;
    }
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
  async updateUSer(updateUserDto: UpdateUserDataDto) {
    const { id, ...restParams } = updateUserDto;
    const user = await this.userModel.findOne({
      where: {
        id,
      },
    });
    if (user) {
      await user.update({
        ...restParams,
      });
    }
  }
}
