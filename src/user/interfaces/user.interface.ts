import { BaseInterfaceRepository } from "src/common/core/interfaces/base.interfaces";
import { User } from "../entity/user.entity";

export interface UserRepositoryInterface extends BaseInterfaceRepository<User> {}
