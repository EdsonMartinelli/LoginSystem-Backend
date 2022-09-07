import { Request, Response } from 'express';
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
            return res.status(200).json({message: "Success!", user: user})
        } catch (error: any) {
            return res.status(400).json({error: error.message})
        }
    }
    
}

export { LoginDTO }