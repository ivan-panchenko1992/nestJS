import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from 'src/users/user.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'Ivan',
      password: 'Panchenko21',
      database: 'nestjs',
      models: [Users],
    }),
  ],
})
export class DbModule {}
