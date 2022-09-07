import bcrypt from 'bcryptjs'
import { IService } from "../../IService";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { User } from '../../../entities/User';

type ILoginUserRequest = {
    email: string,
    password: string
}

class LoginUserService implements IService {

    usersRepository: IUsersRepository
    constructor( usersRepository: IUsersRepository) {
        this.usersRepository = usersRepository
    }
  
    async execute({ email, password }: ILoginUserRequest) {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new Error("Password and/or email incorrect!")
        }

        if (!(bcrypt.compareSync(password, (user as User).password ))) {
            throw new Error("Password incorrect!")
        }

        return user
    }
}

export {LoginUserService}