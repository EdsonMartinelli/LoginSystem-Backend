import { Request, Response } from "express";
import { InvalidUpdateError } from "../../errors/customErrors/InvalidUpdateError";
import { UserDoesNotExistError } from "../../errors/customErrors/UserDoesNotExistError";
import { IResetPasswordUseCase } from "./IResetPasswordUseCase";

class ResetPasswordController {
  private readonly resetPasswordUseCase: IResetPasswordUseCase;

  constructor(resetPasswordUseCase: IResetPasswordUseCase) {
    this.resetPasswordUseCase = resetPasswordUseCase;
  }

  async handle(req: Request, res: Response) {
    try {
      const { password } = req.body;
      const { passwordResetToken } = req.params
      const user = await this.resetPasswordUseCase.execute({
        passwordResetToken,
        password
      });
      return res.status(200).json({
        data: {
          message: "Success!",
          user,
        },
      });
    } catch (error: any | InvalidUpdateError | UserDoesNotExistError) {
      if (error instanceof InvalidUpdateError ||
          error instanceof UserDoesNotExistError) {
        return res.status(error.status).json({
          data: {
            message: error.message,
          },
        });
      }
      console.log(error)
      return res.status(500).json({
        data: {
          message: "Internal Error Server.",
        },
      });
    }
  }
}

export { ResetPasswordController };
