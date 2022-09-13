import { JwtPayload } from "jsonwebtoken";

interface IJWTVerifierController{
    execute(token: string | undefined) : string | JwtPayload
}

export {IJWTVerifierController}