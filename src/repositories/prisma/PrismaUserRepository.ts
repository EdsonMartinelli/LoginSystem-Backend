import { User, userPrototypeProps } from "../../entities/User";
import { usePrisma } from "../../hooks/usePrisma";
import { IUsersRepository } from "../IUsersRepository";

class PrismaUserRepository implements IUsersRepository{
    async create({email, username, password, salt, emailToken}: userPrototypeProps): Promise<User> {
        const user = await usePrisma.user.create({
            data: {
              email,
              username,
              password,
              salt,
              emailToken
            }
        })
        const userEntity = new User(user);
        return userEntity;
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await usePrisma.user.findUnique({ where: { email } })
        if (user == null) {
            return null;
        }
        const userEntity = new User(user)
        return userEntity;
    }

    async findByID(id: string): Promise<User | null> {
        const user = await usePrisma.user.findUnique({ where: { id } })
        if (user == null) {
            return null;
        }
        const userEntity = new User(user)
        return userEntity;
    }

    async validateUser(id: string): Promise<User>{
        const user = await usePrisma.user.update({
             where: { id },
             data: { emailVerified: true }
        })
        const userEntity = new User(user)
        return userEntity;
    }

}

export { PrismaUserRepository }