import { Request, Response } from "express";
import { InvalidCredentialsError } from "../../errors/customErrors/InvalidCredentialsError";
import { UserDoesNotExistError } from "../../errors/customErrors/UserDoesNotExistError";
import { ILoginUseCase } from "./ILoginUseCase";

class LoginController {
  private readonly loginUseCase: ILoginUseCase;

  constructor(loginController: ILoginUseCase) {
    this.loginUseCase = loginController;
  }

  async handle(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const token = await this.loginUseCase.execute({ email, password });
      return res.status(200).json({ data: { token } });
    } catch (error: any | UserDoesNotExistError | InvalidCredentialsError) {
      if (
        error instanceof UserDoesNotExistError ||
        error instanceof InvalidCredentialsError
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

export { LoginController };
