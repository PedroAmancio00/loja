import { Document } from 'mongoose';

export class User extends Document {
  username: string;
  password: string;
  
  super(username: string, password: string){
    this.username = username;
    this.password = password;
  }
}
