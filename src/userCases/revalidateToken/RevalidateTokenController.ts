import { Request, Response } from "express";
import { IRevalidateTokenUseCase } from "./IRevalidateTokenUseCase";

class RevalidateTokenController {
  private readonly revalidateTokenUseCase: IRevalidateTokenUseCase;

  constructor(revalidateTokenController: IRevalidateTokenUseCase) {
    this.revalidateTokenUseCase = revalidateTokenController;
  }

  handle(req: Request, res: Response) {
    const tokenInfo = req.body.tokenInfo;
    const token = this.revalidateTokenUseCase.execute(tokenInfo);
    return res.status(200).json({ message: "Success!", token });
  }
}

export { RevalidateTokenController };
