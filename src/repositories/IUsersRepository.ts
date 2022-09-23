import { User } from "../entities/User";

interface IUsersRepository {
  create: (user: User) => Promise<User>;
  findByEmail: (email: string) => Promise<User | null>;
}

export { IUsersRepository };
