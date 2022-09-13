import { Request, Response ,NextFunction } from "express";
import { IJWTVerifierController } from "./IJWTVerifierController";

class JWTVerifierDTO{
  private jwtVerifierController: IJWTVerifierController

  constructor(jwtVerifierController: IJWTVerifierController) {
      this.jwtVerifierController = jwtVerifierController
  }
  handle( req: Request, res: Response, next: NextFunction ) {
    try {

      const token = req.header('Authorization')?.replace('Bearer ', '');
      const payload = this.jwtVerifierController.execute(token)
      req.body.payload = payload
      next();
      
    } catch (error) {
      res.status(401).json({ error: true, errorMessage: 'Missing authorization token.' })
    }
  }
}

export {JWTVerifierDTO}