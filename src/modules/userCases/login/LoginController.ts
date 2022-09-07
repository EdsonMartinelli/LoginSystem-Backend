import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { PrismaUserRepository } from "../../../repositories/prisma/PrismaUserRepository";
import { IService } from "../../IService";
import { LoginUserService } from "./LoginService";
import { Request, Response } from 'express';

class LoginController{
    private repository: IUsersRepository
    private loginUser: IService

    constructor() {
        this.repository = new PrismaUserRepository()
        this.loginUser = new LoginUserService(this.repository)
    }

    async handle(req: Request, res: Response) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const user = await this.loginUser.execute({ email, password });
            return res.status(200).json({message: "Success!", user: user})
        } catch (error: any) {
            return res.status(400).json({error: error.message})
        }
    }
    
}

export { LoginController }