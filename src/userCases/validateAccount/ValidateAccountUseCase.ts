import { InvalidEmailTokenError } from "../../errors/customErrors/InvalidEmailTokenError";
import { UserDoesNotExistError } from "../../errors/customErrors/UserDoesNotExistError";
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
      throw new UserDoesNotExistError();
    }

    if (user.emailToken !== emailToken) {
      throw new InvalidEmailTokenError();
    }

    const validateUser = await this.usersRepository.validateUser(id);

    return validateUser;
  }
}

export { ValidateAccountUseCase };
