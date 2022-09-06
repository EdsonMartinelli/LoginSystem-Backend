import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { PrismaUserRepository } from "../../../repositories/prisma/PrismaUserRepository";
import { IService } from "../../IService";
import { LoginUserService } from "./LoginUserService";
import { Request, Response } from 'express';

class LoginUserController{
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
            res.status(200).json({message: "Success!", user: user})
        } catch (error: any) {
            res.status(500).json({error: error.message})
        }
    }
    
}

export {LoginUserController}