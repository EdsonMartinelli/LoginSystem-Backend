import { User } from "../../entities/User";

export interface IResetPasswordUserRequest {
  passwordResetToken: string;
  password: string;
}

interface IResetPasswordUseCase {
  execute: (args: IResetPasswordUserRequest) => Promise<User>;
}

export { IResetPasswordUseCase };
