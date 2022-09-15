export type payloadProps = {
    id: string,
    email: string,
    username: string,
    iat: number
}

export type tokenInfoProps = {
    token: string,
    payload : payloadProps
}


interface IJWTVerifierController{
    execute(token: string | undefined) : tokenInfoProps
}

export {IJWTVerifierController}