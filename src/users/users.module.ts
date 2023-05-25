import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './user.model';
import { AuthMiddleware } from 'src/auth/auth.middleware';

@Module({
  imports: [SequelizeModule.forFeature([Users])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [SequelizeModule],
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: 'users/:userId', method: RequestMethod.GET });
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: 'users', method: RequestMethod.POST });
  }
}
