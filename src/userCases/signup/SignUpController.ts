import { Request, Response } from "express";
import { ISignUpUseCase } from "./ISignUpUseCase";

class SignUpController {
  private readonly signUpUseCase: ISignUpUseCase;

  constructor(signUpUseCase: ISignUpUseCase) {
    this.signUpUseCase = signUpUseCase;
  }

  async handle(req: Request, res: Response) {
    try {
      const { email, username, password } = req.body;
      const user = await this.signUpUseCase.execute({
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

export { SignUpController };
