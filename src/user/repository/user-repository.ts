import { InjectRepository } from "@nestjs/typeorm";
import { BaseAbstractRepostitory } from "src/common/core/repositories/base.repository";
import { Repository } from "typeorm";
import { User } from "../entity/user.entity";
import { UserRepositoryInterface } from "../interfaces/user.interface";


export class UserRepository extends BaseAbstractRepostitory<User> implements UserRepositoryInterface {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
        super(userRepository)
    }
}
