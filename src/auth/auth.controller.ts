import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import RegisterDto from './dto/register.dto';

@Controller()
export class AuthController {
  constructor(private auth: AuthService){}

  @Post('register')
  register(@Body() body: RegisterDto){
    return this.auth.register(body)
  }

  @Post('login')
  login(){
    return 'abc'
  }
}
