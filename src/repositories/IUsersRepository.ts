import { User } from "../entities/User";

interface IUsersRepository {
  create: (user: User) => Promise<User>;
  findByEmail: (email: string) => Promise<User | null>;
  findByID: (id: string) => Promise<User | null>;
  validateUser: (id: string) => Promise<User>
}

export { IUsersRepository };
