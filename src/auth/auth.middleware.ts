import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Request, Response } from 'express';
import { Users } from 'src/users/user.model';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    @InjectModel(Users)
    private userModel: typeof Users,
  ) {}
  async use(req: Request, res: Response, next: () => void) {
    try {
      const { api_key } = req.query;
      if (!api_key) {
        throw new Error('Access denied');
      }
      return next();
    } catch (error) {
      throw new UnauthorizedException('Access denied', {
        cause: new Error(),
      });
    }
  }
}
