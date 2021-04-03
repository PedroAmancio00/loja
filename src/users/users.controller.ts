import { User } from './shared/user';
import { UsersService } from './shared/users.service';
import { Controller, Body, Post, Patch, UseGuards, Headers} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';
import { AuthService } from 'src/auth/shared/auth.service';


@Controller('starstore')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private readonly authService: AuthService,
  ) { }

  @Post('user')
  async create(@Body() user: User): Promise<User> {
    return this.usersService.create(user);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('user/change')
  async update(@Headers('Authorization') auth: string, @Body() user: User): Promise<User> {
    const a = await this.authService.decode(auth)
    var string = JSON.stringify(a);
    var objectValue = JSON.parse(string);
    return this.usersService.update(user, objectValue['username']);
  }

}
