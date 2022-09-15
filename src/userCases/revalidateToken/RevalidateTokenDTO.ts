import { Request, Response } from 'express';
import { IRevalidateTokenController } from './IRevalidateTokenController';

class RevalidateTokenDTO{
    private revalidateTokenController: IRevalidateTokenController

    constructor(revalidateTokenController: IRevalidateTokenController) {
        this.revalidateTokenController = revalidateTokenController
    }

    handle(req: Request, res: Response) {
        const tokenInfo = req.body.tokenInfo
        const token = this.revalidateTokenController.execute(tokenInfo);
        return res.status(200).json({message: "Success!", token})
    }
    
}

export { RevalidateTokenDTO }