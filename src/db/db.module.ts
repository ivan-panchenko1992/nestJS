import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USERNAME } from 'src/constans';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: DB_HOST,
      port: 3306,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_NAME,
      models: [],
    }),
  ],
})
export class DbModule {}
