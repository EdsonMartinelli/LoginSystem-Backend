import { Request, Response } from "express";
import { ISignUpController } from "./ISignUpController";

class SignUpDTO {
  private readonly signUpController: ISignUpController;

  constructor(signUpControler: ISignUpController) {
    this.signUpController = signUpControler;
  }

  async handle(req: Request, res: Response) {
    try {
      const email = req.body.email;
      const username = req.body.username;
      const password = req.body.password;
      const user = await this.signUpController.execute({
        email,
        username,
        password,
      });
      return res.status(200).json({ message: "Success!", user });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export { SignUpDTO };
