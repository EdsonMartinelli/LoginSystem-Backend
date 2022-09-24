import { Request, Response } from "express";
import { ILoginController } from "./ILoginController";

class LoginDTO {
  private readonly loginController: ILoginController;

  constructor(loginController: ILoginController) {
    this.loginController = loginController;
  }

  handle(req: Request, res: Response) {
    const { email, password } = req.body;
    this.loginController
      .execute({ email, password })
      .then((token) => {
        res.status(200).json({ message: "Success!", token });
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  }
}

export { LoginDTO };
