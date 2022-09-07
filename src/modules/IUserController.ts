import { User } from "../entities/User"

interface IUserController {
    execute(args: any) : Promise<User>
}

export {IUserController}