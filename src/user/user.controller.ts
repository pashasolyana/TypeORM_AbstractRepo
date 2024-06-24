import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { DeepPartial } from 'typeorm'
import { User } from './entity/user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get('')
    async GetUsers() {
        return await this.userService.getUsers()
    }

    @Post('')
    async CreateUser(@Body() body: DeepPartial<User>) {
        this.userService.createUser(body)
    }

    @Get(':/id')
    async GetOneUser(@Param('id') id: string): Promise<User> {
        return await this.userService.getUserById(id)
    }

}