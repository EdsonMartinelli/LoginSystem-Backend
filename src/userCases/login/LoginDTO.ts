import { Request, Response } from "express";
import { ILoginController } from "./ILoginController";

class LoginDTO {
  private readonly loginController: ILoginController;

  constructor(loginController: ILoginController) {
    this.loginController = loginController;
  }

  async handle(req: Request, res: Response) {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const token = await this.loginController.execute({ email, password });
      return res.status(200).json({ message: "Success!", token });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { LoginDTO };
