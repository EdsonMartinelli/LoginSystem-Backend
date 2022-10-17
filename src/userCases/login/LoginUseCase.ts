import bcrypt from "bcryptjs";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { sign } from "jsonwebtoken";
import { ILoginUseCase, ILoginUserRequest } from "./ILoginUseCase";
import { payloadProps } from "../../middleware/JWT/IJWTVerifierMiddleware";
import { UserDoesNotExistError } from "../../errors/customErrors/UserDoesNotExistError";
import { InvalidCredentialsError } from "../../errors/customErrors/InvalidCredentialsError";

class LoginUseCase implements ILoginUseCase {
  usersRepository: IUsersRepository;
  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ email, password }: ILoginUserRequest) {
    const user = await this.usersRepository.findByEmail(email);

    if (user == null) {
      throw new UserDoesNotExistError();
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new InvalidCredentialsError();
    }

    const payload: payloadProps = {
      id: user.id ?? " ",
      email: user.email,
      username: user.username,
      iat: Math.floor(Date.now() / 1000),
    };

    const token = sign(payload, process.env.SECRET_KEY ?? "", {
      expiresIn: "30m", // 30 minutes
    });
    return token;
  }
}

export { LoginUseCase };
