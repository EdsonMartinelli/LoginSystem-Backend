import { IRevalidateTokenController } from "./IRevalidateTokenController";
import { sign } from "jsonwebtoken";
import {
  payloadProps,
  tokenInfoProps,
} from "../../middleware/JWT/IJWTVerifierController";

class RevalidateTokenController implements IRevalidateTokenController {
  execute(tokenInfo: tokenInfoProps) {
    const timeToRevalidate = 15 * 60; // 15 minutes

    if (
      Math.floor(Date.now() / 1000) >=
      tokenInfo.payload.iat + timeToRevalidate
    ) {
      const newPayload: payloadProps = {
        id: tokenInfo.payload.id,
        email: tokenInfo.payload.email,
        username: tokenInfo.payload.username,
        iat: Date.now(),
      };
      const newToken = sign(newPayload, process.env.SECRET_KEY ?? "", {
        expiresIn: "30m",
      }); // 30 minutes
      return newToken;
    }

    return tokenInfo.token;
  }
}

export { RevalidateTokenController };
