export type ILoginUserRequest = {
    email: string,
    password: string
}

interface ILoginController {
    execute(args: ILoginUserRequest) : Promise<string>
}

export {ILoginController}