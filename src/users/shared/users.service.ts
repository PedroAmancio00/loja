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

  async update(user: User, username: string) {
    if(username === user.username){
      await this.userModel.updateOne({'username': username}, user).exec();
      return this.getByUser(user.username);
    }
    else{
      throw new HttpException('Usuário diferente', HttpStatus.CONFLICT);
    }
  }
}
