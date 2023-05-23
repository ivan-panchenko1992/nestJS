import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: () => void) {
    try {
      const { api_key } = req.query;

      if (!api_key) {
        throw new Error('access denied');
      }
      return next();
    } catch (error) {
      throw new HttpException('Access denied', HttpStatus.UNAUTHORIZED);
    }
  }
}
