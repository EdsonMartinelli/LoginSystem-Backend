import * as crypto from "crypto";
import bcrypt from "bcryptjs";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IResetPasswordUseCase, IResetPasswordUserRequest } from "./IResetPasswordUseCase";
import { UserDoesNotExistError } from "../../errors/customErrors/UserDoesNotExistError";
import { InvalidUpdateError } from "../../errors/customErrors/InvalidUpdateError";

class ResetPasswordUseCase implements IResetPasswordUseCase {
  usersRepository: IUsersRepository;
  constructor(
    usersRepository: IUsersRepository,
  ) {
    this.usersRepository = usersRepository;
  }

  async execute({ passwordResetToken, password }: IResetPasswordUserRequest) {
    const user = await this.usersRepository.findByPasswordResetToken(passwordResetToken)

    if( user == null) {
      throw new UserDoesNotExistError();
    }

    const newSalt = bcrypt.genSaltSync();
    const newPassword = bcrypt.hashSync(password, newSalt);
    const newPasswordResetToken = crypto.randomUUID();

    const updateUser = await this.usersRepository.passwordReset({
      passwordResetToken,
      newSalt,
      newPassword,
      newPasswordResetToken
    });

    if (updateUser == null) {
      throw new InvalidUpdateError()
    }

    return updateUser;
  }
}

export { ResetPasswordUseCase };
