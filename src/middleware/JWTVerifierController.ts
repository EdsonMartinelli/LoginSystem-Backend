import { verify } from "jsonwebtoken"
import { IJWTVerifierController, payloadProps } from "./IJWTVerifierController";

type payloadWithExpProps = payloadProps &{
  exp: number
}

class JWTVerifierController implements IJWTVerifierController{
  execute( token: string | undefined ){
    if (!token || token == '') throw new Error("sem token")

    const payloadWithExp = verify(token , process.env.SECRET_KEY || ""); 
    
    const {id, email, username, iat} = (payloadWithExp as payloadWithExpProps)
    const tokenInfo = {
      token,
      payload: {
        id,
        email,
        username,
        iat
      }
    }
    return tokenInfo
    
  }
}

export {JWTVerifierController}