import { verify } from "jsonwebtoken";
import { IJWTVerifierMiddleware, payloadProps } from "./IJWTVerifierMiddleware";

type payloadWithExpProps = payloadProps & {
  exp: number;
};

class JWTVerifierMiddleware implements IJWTVerifierMiddleware {
  execute(token: string | undefined) {
    if (token == null || token === "") throw new Error("sem token");

    const payloadWithExp = verify(token, process.env.SECRET_KEY ?? "");

    const { id, email, username, iat } = payloadWithExp as payloadWithExpProps;
    const tokenInfo = {
      token,
      payload: {
        id,
        email,
        username,
        iat,
      },
    };
    return tokenInfo;
  }
}

export { JWTVerifierMiddleware };
