import { Request, Response } from 'express';
import { IUserController } from "../../IUserController";

class SignUpDTO{

    private signUpController: IUserController

    constructor(signUpControler: IUserController) {
        this.signUpController = signUpControler
    }

    async handle(req: Request, res: Response) {
        try {
            const email = req.body.email;
            const username = req.body.username;
            const password = req.body.password;
            const user = await this.signUpController.execute({ email, username, password });
            return res.status(200).json({message: "Success!", user: user})
        } catch (error: any) {
            return res.status(500).json({error : error.message})
        }
    }
    
}

export { SignUpDTO }