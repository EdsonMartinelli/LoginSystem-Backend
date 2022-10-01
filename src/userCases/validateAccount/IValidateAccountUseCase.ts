import { User } from "../../entities/User";

export interface validateAccountProps {
  id: string;
  emailToken: string;
}

interface IValidateAccountUseCase {
  execute: (args: validateAccountProps) => Promise<User>;
}

export { IValidateAccountUseCase };
