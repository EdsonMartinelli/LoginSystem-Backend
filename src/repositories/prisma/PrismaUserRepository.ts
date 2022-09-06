import { User } from "../../entities/User";
import { usePrisma } from "../../hooks/usePrisma";
import { IUsersRepository } from "../IUsersRepository";

class PrismaUserRepository implements IUsersRepository{
    async create({email, username, password, salt, emailToken}: User): Promise<User> {
        const user = await usePrisma.user.create({
            data: {
              email,
              username,
              password,
              salt,
              emailToken
            }
        })

        return user
    }

    async get(email: string): Promise<User | null> {
        const user = await usePrisma.user.findUnique({ where: { email } })
        return user;
    }

}

export { PrismaUserRepository }