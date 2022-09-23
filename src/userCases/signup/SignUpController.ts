import * as crypto from "crypto";
import bcrypt from "bcryptjs";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ISignUpController, ISignUpUserRequest } from "./ISignUpController";

class SignUpController implements ISignUpController {
  usersRepository: IUsersRepository;
  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ email, username, password }: ISignUpUserRequest) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists != null) {
      throw new Error("User already exists!");
    }

    const salt = bcrypt.genSaltSync();
    const passwordHash = bcrypt.hashSync(password, salt);
    const emailToken = crypto.randomBytes(3).toString("hex");

    const newUser = new User({
      email,
      username,
      password: passwordHash,
      salt,
      emailToken,
    });

    const user = await this.usersRepository.create(newUser);
    return user;
  }
}

export { SignUpController };
