import { Injectable } from '@nestjs/common';
import * as SvgCaptcha from 'svg-captcha';

@Injectable()
export class LoginService {
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
}
