import { Request, Response } from "express";
import { IValidateAccountController } from "./IValidateAccountController";

class ValidateAccountDTO {
  validateAccountController: IValidateAccountController;
  constructor(validateAccountController: IValidateAccountController) {
    this.validateAccountController = validateAccountController;
  }

  async handle(req: Request, res: Response) {
    try {
      const { emailToken } = req.body;
      const { id } = req.params;
      const user = this.validateAccountController.execute({ id, emailToken });
      return res.status(200).json({ message: "Success!", user });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export { ValidateAccountDTO };
