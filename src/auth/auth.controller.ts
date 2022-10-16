import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService){}

  @Post('register')
  register(@Body() body: any){}

  @Post('login')
  login(){
    return 'abc'
  }
}