import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './user.model';

@Module({
  imports: [SequelizeModule.forFeature([Users])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [SequelizeModule],
})
export class UsersModule {}
