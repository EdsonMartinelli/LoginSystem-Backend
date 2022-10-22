import { User, userPrototypeProps } from "../../entities/User";
import { usePrisma } from "../../hooks/usePrisma";
import { IUsersRepository, passwordResetProps } from "../IUsersRepository";

class PrismaUserRepository implements IUsersRepository{
    async create({email, username, password, passwordResetToken, salt, emailToken}: userPrototypeProps): Promise<User> {
        const user = await usePrisma.user.create({
            data: {
              email,
              username,
              password,
              passwordResetToken,
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
    async findByPasswordResetToken(passwordResetToken: string): Promise<User | null>{
        const user = await usePrisma.user.findUnique({ where: { passwordResetToken } })
        if (user == null) {
            return null;
        }
        const userEntity = new User(user)
        return userEntity;
    }

    async passwordReset({passwordResetToken, newPassword, newSalt, newPasswordResetToken}: passwordResetProps): Promise<User | null>{
        const user = await usePrisma.user.update({ 
            where: { passwordResetToken }, 
            data: {
                password: newPassword,
                salt: newSalt,
                passwordResetToken: newPasswordResetToken
            }
        })
        if (user == null) {
            return null;
        }
        const userEntity = new User(user)
        return userEntity;
    }

}

export { PrismaUserRepository }