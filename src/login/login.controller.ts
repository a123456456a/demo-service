import { Controller, Get, Post, Req, Session } from '@nestjs/common';
import { LoginService } from './login.service';
import { Request } from 'express';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  getSvgCaptcha(@Req() request: Request) {
    const captcha = this.loginService.createCaptcha();
    request.session['captche'] = captcha.text;
    console.log(request.session['captche']);
    return captcha.data;
  }

  @Post()
  login(@Req() request: Request, @Session() session: Record<string, any>) {
    const { username, password, captcha } = request.body;
    if (captcha.toLocaleLowerCase() !== session.captche.toLocaleLowerCase()) {
      return '验证码错误';
    }
    if (username === 'admin' && password === 'admin') {
      return '登录成功';
    }
    return '用户名或密码错误';
  }
}
