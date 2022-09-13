export type payloadProps = {
    id: string,
    email: string,
    username: string,
    iat: number
}

interface IRevalidateTokenController {
    execute(payload : payloadProps) : string
}

export {IRevalidateTokenController}