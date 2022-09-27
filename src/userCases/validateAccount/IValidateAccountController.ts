import { User } from "../../entities/User";

export interface validateAccountProps {
  id: string;
  emailToken: string;
}

interface IValidateAccountController {
  execute: (args: validateAccountProps) => Promise<User>;
}

export { IValidateAccountController };
