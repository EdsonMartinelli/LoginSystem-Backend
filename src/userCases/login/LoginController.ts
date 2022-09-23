import bcrypt from "bcryptjs";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { sign } from "jsonwebtoken";
import { ILoginController, ILoginUserRequest } from "./ILoginController";
import { payloadProps } from "../../middleware/IJWTVerifierController";

class LoginController implements ILoginController {
  usersRepository: IUsersRepository;
  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ email, password }: ILoginUserRequest) {
    const user = await this.usersRepository.findByEmail(email);

    if (user == null) {
      throw new Error("Password and/or email incorrect!");
    }

    if (!bcrypt.compareSync(password, user.password)) {
      throw new Error("Password incorrect!");
    }

    const payload: payloadProps = {
      id: user.id ?? " ",
      email: user.email,
      username: user.username,
      iat: Math.floor(Date.now() / 1000),
    };

    const token = sign(payload, process.env.SECRET_KEY ?? "", {
      expiresIn: "30m",
    }); // 30 minutes
    return token;
  }
}

export { LoginController };
