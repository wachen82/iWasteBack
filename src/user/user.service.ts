import { Injectable } from '@nestjs/common';
import { RegisterUserResponse } from '../types';
import { RegisterDto } from './dto/register.dto';

import {hashPwd} from "../utils/hash-pwd";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";


@Injectable()
export class UserService {
//   constructor(
//       @InjectRepository(User) private usersRepository: Repository<User>,
//   ){}
//   filter(user: User): RegisterUserResponse{
//     const {id, email} = user;
//     return {id, email};
// }
//   async register(newUser: RegisterDto): Promise<RegisterUserResponse> {
//     const user = new User();
//     user.email = newUser.email;
//     user.pwdHash=hashPwd(newUser.pwd)
//     await user.save();
//
//     return this.filter(user);
//   }
//
//   async getOneUser(id: string): Promise<User> {
//     return await User.findOne({ where: { id } });
//   }
}
