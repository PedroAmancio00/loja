import { UsersService } from './../../users/shared/users.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async validateUser(userName: string, userPassword: string) {
    const user = await this.usersService.getByUser(userName);
    if (user && user.password === userPassword) {
      const { _id, username} = user;
      return { id: _id, username};
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  decode(auth: string): {uuid: string}{
      const jwt = auth.replace('Bearer ', '');
      return this.jwtService.decode(jwt, { json: true }) as { uuid: string };
  }

}
