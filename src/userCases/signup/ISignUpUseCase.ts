import { User } from "../../entities/User";

export interface ISignUpUserRequest {
  email: string;
  username: string;
  password: string;
}

interface ISignUpUseCase {
  execute: (args: ISignUpUserRequest) => Promise<User>;
}

export { ISignUpUseCase };
