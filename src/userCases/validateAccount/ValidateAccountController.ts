import { Request, Response } from "express";
import { IValidateAccountUseCase } from "./IValidateAccountUseCase";

class ValidateAccountController {
  validateAccountUseCase: IValidateAccountUseCase;
  constructor(validateAccountUseCase: IValidateAccountUseCase) {
    this.validateAccountUseCase = validateAccountUseCase;
  }

  async handle(req: Request, res: Response) {
    try {
      const { emailToken } = req.body;
      const { id } = req.params;
      const user = this.validateAccountUseCase.execute({ id, emailToken });
      return res.status(200).json({ message: "Success!", user });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export { ValidateAccountController };
