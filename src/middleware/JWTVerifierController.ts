import { verify } from "jsonwebtoken"
import { IJWTVerifierController } from "./IJWTVerifierController";


class JWTVerifierController implements IJWTVerifierController{
  execute( token: string | undefined){

    if (!token) throw new Error();

    const payload = verify(token , process.env.SECRET_KEY || "");
    return payload
  }
}

export {JWTVerifierController}