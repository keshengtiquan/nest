import { Injectable } from '@nestjs/common'
import { hash } from 'argon2'
import { PrismaService } from 'src/prisma/prisma.service'
import RegisterDto from './dto/register.dto'

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  /**
   *
   * @param body 控制器传过来的参数对象
   * @returns 返回创建的用户
   */
  async register(body: RegisterDto) {
    const user = await this.prisma.user.create({
      data: {
        name: body.name,
        password: await hash(body.password),
      },
    })
    return user
  }
}
