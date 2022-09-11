import { Request, Response } from 'express';
import { IRevalidateTokenController } from './IRevalidateTokenController';

class RevalidateTokenDTO{
    private revalidateTokenController: IRevalidateTokenController

    constructor(revalidateTokenController: IRevalidateTokenController) {
        this.revalidateTokenController = revalidateTokenController
    }

    async handle(req: Request, res: Response) {
        try {
            const teste  = "sdfsadfsdfsdf"
            const token = await this.revalidateTokenController.execute(teste);
            return res.status(200).json({message: "Success!", token})
        } catch (error: any) {
            return res.status(400).json({error: error.message})
        }
    }
    
}

export { RevalidateTokenDTO }