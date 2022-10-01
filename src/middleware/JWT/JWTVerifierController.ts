import { Request, Response, NextFunction } from "express";
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
    } catch (error: any) {
      res.status(401).json({ error: true, errorMessage: error.message });
    }
  }
}

export { JWTVerifierController };
