import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
