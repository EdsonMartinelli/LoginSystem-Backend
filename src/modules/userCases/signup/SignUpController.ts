import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { PrismaUserRepository } from "../../../repositories/prisma/PrismaUserRepository";
import { IService } from "../../IService";
import { SignUpService } from "./SignUpService";
import { Request, Response } from 'express';

class SignUpController{

    private repository: IUsersRepository
    private signUpUser: IService

    constructor() {
        this.repository = new PrismaUserRepository()
        this.signUpUser = new SignUpService(this.repository)
    }

    async handle(req: Request, res: Response) {
        try {
            const email = req.body.email;
            const username = req.body.username;
            const password = req.body.password;
            const user = await this.signUpUser.execute({ email, username, password });
            return res.status(200).json({message: "Success!", user: user})
        } catch (error: any) {
            return res.status(500).json({error : error.message})
        }
    }
    
}

export { SignUpController }