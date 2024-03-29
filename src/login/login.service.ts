import { HttpException, Injectable, Session } from '@nestjs/common';
import * as SvgCaptcha from 'svg-captcha';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  createCaptcha() {
    return SvgCaptcha.create({
      size: 4, // 验证码长度
      ignoreChars: '0o1i', // 验证码字符中排除 0o1i
      noise: 2, // 干扰线条的数量
      color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
      background: '#999', // 验证码图片背景颜色
      width: 100,
      height: 40,
    });
  }

  async signIn(
    username: string,
    password: string,
    captcha: string,
    session: Record<string, any>,
  ) {
    const user = await this.userService.findOne(username);
    if (!captcha) {
      throw new HttpException('验证不能为空', 400);
    }
    if (captcha.toLocaleLowerCase() !== session.captche.toLocaleLowerCase()) {
      throw new HttpException('验证码错误', 400);
    }
    if (user && user.password === password) {
      const { name, email } = user;
      const token = this.jwtService.sign({ name, email });
      return {
        access_token: token,
      };
    }
    throw new HttpException('用户名或密码错误', 400);
  }
}
