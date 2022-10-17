import { Request, Response } from "express";
import { InvalidEmailTokenError } from "../../errors/customErrors/InvalidEmailTokenError";
import { UserDoesNotExistError } from "../../errors/customErrors/UserDoesNotExistError";
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
      return res.status(200).json({
        data: {
          message: "Success!",
          user,
        },
      });
    } catch (error: any | UserDoesNotExistError | InvalidEmailTokenError) {
      if (
        error instanceof UserDoesNotExistError ||
        error instanceof InvalidEmailTokenError
      ) {
        return res.status(error.status).json({
          data: {
            message: error.message,
          },
        });
      }
      return res.status(500).json({
        data: {
          message: "Internal Error Server.",
        },
      });
    }
  }
}

export { ValidateAccountController };
