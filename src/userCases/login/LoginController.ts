import bcrypt from 'bcryptjs'
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from '../../entities/User';
import jwt from "jsonwebtoken";
import { ILoginController, ILoginUserRequest } from './ILoginController';

class LoginController implements ILoginController{

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

        const payload = {
            id: user.id,
            email: user.email,
            username: user.username
        }
        
        const token = jwt.sign(payload, process.env.SECRET_KEY || "", { expiresIn: '15m' }) 
        return token
    }
}

export { LoginController }