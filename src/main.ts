import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { HttpFilter } from './common/filter';
import { Response } from './common/response';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // session配置
  app.use(
    session({
      secret: 'test',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 3600000 },
    }),
  );
  // 异常过滤器注册
  app.useGlobalFilters(new HttpFilter());
  // 全局拦截器
  app.useGlobalInterceptors(new Response());
  await app.listen(3000);
}

bootstrap();
