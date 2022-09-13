import { IRevalidateTokenController, payloadProps } from "./IRevalidateTokenController";
import { sign } from "jsonwebtoken"

class RevalidateTokenController implements IRevalidateTokenController{
  
    execute(payload: payloadProps) {
        const timeToRevalidate = 15 * 1000 // 15 minutes 

        if(!(Date.now() >= payload.iat + timeToRevalidate)) {
            throw new Error("New token is not needed.")
        }
        const newToken = sign(payload, process.env.SECRET_KEY || "", { expiresIn: '30m' })
        return newToken
    }
}

export { RevalidateTokenController }