import { Controller, Get, Post, Req, Session } from '@nestjs/common';
import { LoginService } from './login.service';
import { Request } from 'express';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get('captcha')
  getSvgCaptcha(@Req() request: Request) {
    const captcha = this.loginService.createCaptcha();
    request.session['captcha'] = captcha.text;
    return captcha.data;
  }

  @Post()
  login(@Req() request: Request, @Session() session: Record<string, any>) {
    const { username, password, captcha } = request.body;
    return this.loginService.signIn(username, password, captcha, session);
  }
}
