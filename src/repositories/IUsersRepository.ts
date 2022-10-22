import { User, userPrototypeProps } from "../entities/User";


export interface passwordResetProps{
  passwordResetToken: string,
  newPassword: string,
  newSalt: string,
  newPasswordResetToken: string
}

interface IUsersRepository {
  create: (user: userPrototypeProps) => Promise<User>;
  findByEmail: (email: string) => Promise<User | null>;
  findByID: (id: string) => Promise<User | null>;
  findByPasswordResetToken: (passwordResetToken: string) => Promise<User | null>;
  passwordReset: (args: passwordResetProps) => Promise<User | null>;
  validateUser: (id: string) => Promise<User>;
}

export { IUsersRepository };
