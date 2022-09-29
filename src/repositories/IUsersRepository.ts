import { User, userPrototypeProps } from "../entities/User";

interface IUsersRepository {
  create: (user: userPrototypeProps) => Promise<User>;
  findByEmail: (email: string) => Promise<User | null>;
  findByID: (id: string) => Promise<User | null>;
  validateUser: (id: string) => Promise<User>;
}

export { IUsersRepository };
