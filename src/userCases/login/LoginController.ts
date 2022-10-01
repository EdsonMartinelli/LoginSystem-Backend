import { Request, Response } from "express";
import { ILoginUseCase } from "./ILoginUseCase";

class LoginController {
  private readonly loginUseCase: ILoginUseCase;

  constructor(loginController: ILoginUseCase) {
    this.loginUseCase = loginController;
  }

  async handle(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const token = await this.loginUseCase.execute({ email, password });
      return res.status(200).json({ message: "Success!", token });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { LoginController };
