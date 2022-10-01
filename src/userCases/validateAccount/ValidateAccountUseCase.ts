import { IUsersRepository } from "../../repositories/IUsersRepository";
import {
  IValidateAccountUseCase,
  validateAccountProps,
} from "./IValidateAccountUseCase";

class ValidateAccountUseCase implements IValidateAccountUseCase {
  usersRepository: IUsersRepository;
  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ id, emailToken }: validateAccountProps) {
    const user = await this.usersRepository.findByID(id);

    if (user == null) {
      throw new Error("There is no user with this ID!");
    }

    if (user.emailToken !== emailToken) {
      throw new Error("Email token for validate is incorrect!");
    }

    const validateUser = await this.usersRepository.validateUser(id);

    return validateUser;
  }
}

export { ValidateAccountUseCase };
