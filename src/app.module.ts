import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RuleModule } from './rule/rule.module';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'test',
      // entities: [__dirname + '/**/*.entity{.ts,.js}'], // 用于自动加载实体
      synchronize: true, // 自动创建表
      retryDelay: 500, // 重试延迟
      retryAttempts: 10, // 重试次数
      autoLoadEntities: true, // 自动加载实体
    }),
    UserModule,
    RuleModule,
    LoginModule,
  ],
  controllers: [LoginController],
  providers: [LoginService],
})
export class AppModule {}
