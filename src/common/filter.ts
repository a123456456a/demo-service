// 异常拦截器
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    const status = exception.getStatus();

    response.status(status).json({
      data: null,
      success: false,
      message: exception.message,
      timestamp: new Date().toISOString(),
      path: request.url,
      code: status,
    });
  }
}
