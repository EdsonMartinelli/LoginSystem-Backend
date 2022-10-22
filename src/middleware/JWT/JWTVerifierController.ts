import { Request, Response, NextFunction } from "express";
import {
  JsonWebTokenError,
  NotBeforeError,
  TokenExpiredError,
} from "jsonwebtoken";
import { NoTokenError } from "../../errors/customErrors/NoTokenError";
import { IJWTVerifierMiddleware } from "./IJWTVerifierMiddleware";

class JWTVerifierController {
  private readonly jwtVerifierMiddleware: IJWTVerifierMiddleware;

  constructor(jwtVerifierMiddleware: IJWTVerifierMiddleware) {
    this.jwtVerifierMiddleware = jwtVerifierMiddleware;
  }

  handle(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req
        .header("Authorization")
        ?.replace("Bearer", "")
        .replace(" ", "");
      const tokenInfo = this.jwtVerifierMiddleware.execute(token);
      req.body.tokenInfo = tokenInfo;
      next();
    } catch (error:
      | any
      | TokenExpiredError
      | JsonWebTokenError
      | NotBeforeError
      | NoTokenError) {
      if (
        error instanceof TokenExpiredError ||
        error instanceof JsonWebTokenError ||
        error instanceof NotBeforeError
      ) {
        return res.status(401).json({
          data: {
            message: "Token is invalid.",
          },
        });
      }

      if (error instanceof NoTokenError) {
        return res.status(error.status).json({
          data: {
            message: error.message,
          },
        });
      }

      return res.status(500).json({
        data: {
          message: "Internal Error Server.",
        },
      });
    }
  }
}

export { JWTVerifierController };
