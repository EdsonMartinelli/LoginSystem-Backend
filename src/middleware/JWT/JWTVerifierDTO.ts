import { Request, Response, NextFunction } from "express";
import { IJWTVerifierController } from "./IJWTVerifierController";

class JWTVerifierDTO {
  private readonly jwtVerifierController: IJWTVerifierController;

  constructor(jwtVerifierController: IJWTVerifierController) {
    this.jwtVerifierController = jwtVerifierController;
  }

  handle(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req
        .header("Authorization")
        ?.replace("Bearer", "")
        .replace(" ", "");
      const tokenInfo = this.jwtVerifierController.execute(token);
      req.body.tokenInfo = tokenInfo;
      next();
    } catch (error: any) {
      res.status(401).json({ error: true, errorMessage: error.message });
    }
  }
}

export { JWTVerifierDTO };
