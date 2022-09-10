import { Request, Response } from 'express';
import jwt from "jsonwebtoken";
import { IUserController } from "../../IUserController";

class LoginDTO{
    private loginController: IUserController

    constructor(loginController: IUserController) {
        this.loginController = loginController
    }

    async handle(req: Request, res: Response) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const user = await this.loginController.execute({ email, password });
            const payload = {
                id: user.id,
                email: user.email,
                username: user.username
            }
            const token = jwt.sign(payload, process.env.SECRET_KEY || "", { expiresIn: '15m' }) 
            return res.status(200).json({message: "Success!", token})
        } catch (error: any) {
            return res.status(400).json({error: error.message})
        }
    }
    
}

export { LoginDTO }