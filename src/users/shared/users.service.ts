import { User } from './user';
import { InjectModel } from '@nestjs/mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async getByUser(username: string) {
    return await this.userModel.findOne({ username }).exec();
  }

  async create(user: User) {
    var tmp = this.getByUser(user.username);
    const createdUser = new this.userModel(user);
    if(await tmp == null){
      return await createdUser.save();
    }
    else{
      throw new HttpException('Usuário já existente', HttpStatus.CONFLICT);
    }
  }
}
