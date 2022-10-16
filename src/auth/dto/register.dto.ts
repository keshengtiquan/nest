import { IsNotEmpty } from "class-validator"
import { IsNotExistsRule } from "src/common/rules/is-not-exist.rule"

export default class RegisterDto{
  @IsNotEmpty({message: '用户名不能为空'})
  @IsNotExistsRule('user', {message: '用户已注册'})
  name: string
  @IsNotEmpty({message: '密码不能为空'})
  password: string
}
