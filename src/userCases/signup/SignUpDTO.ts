import { Request, Response } from "express";
import { ISignUpController } from "./ISignUpController";

class SignUpDTO {
  private readonly signUpController: ISignUpController;

  constructor(signUpControler: ISignUpController) {
    this.signUpController = signUpControler;
  }

  handle(req: Request, res: Response) {
    const { email, username, password } = req.body;
    this.signUpController
      .execute({
        email,
        username,
        password,
      })
      .then((user) => {
        res.status(200).json({ message: "Success!", user });
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  }
}

export { SignUpDTO };
