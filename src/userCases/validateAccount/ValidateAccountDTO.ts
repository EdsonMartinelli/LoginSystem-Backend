import { Request, Response } from "express";
import { IValidateAccountController } from "./IValidateAccountController";

class ValidateAccountDTO {
  validateAccountController: IValidateAccountController;
  constructor(validateAccountController: IValidateAccountController) {
    this.validateAccountController = validateAccountController;
  }

  handle(req: Request, res: Response) {
    const { emailToken } = req.body;
    const { id } = req.params;
    this.validateAccountController
      .execute({
        id,
        emailToken,
      })
      .then((user) => {
        res.status(200).json({ message: "Success!", user });
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  }
}

export { ValidateAccountDTO };
