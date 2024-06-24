import { Injectable } from '@nestjs/common';
import { DeepPartial } from 'typeorm';
import { User } from './entity/user.entity';
import { UserRepository } from './repository/user-repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) { }
    async getUsers() {
        await this.userRepository.findAll()
    }

    async createUser(body: DeepPartial<User>) {
       return this.userRepository.create(body)
    }

    async getUserById(id:string){
        return this.userRepository.findOneById(id)
    }
}
