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

    async findByEmail(email: string): Promise<User | null> {
        const user = await usePrisma.user.findUnique({ where: { email } })
        return user;
    }

    async findByID(id: string): Promise<User | null> {
        const user = await usePrisma.user.findUnique({ where: { id } })
        return user;
    }

    async validateUser(id: string): Promise<User>{
        const user = await usePrisma.user.update({
             where: { id },
             data: { emailVerified: true }
        })

        return user
    }

}

export { PrismaUserRepository }