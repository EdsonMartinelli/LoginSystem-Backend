import { User } from "../../entities/User";

export interface ISignUpUserRequest {
  email: string;
  username: string;
  password: string;
}

interface ISignUpController {
  execute: (args: ISignUpUserRequest) => Promise<User>;
}

export { ISignUpController };
