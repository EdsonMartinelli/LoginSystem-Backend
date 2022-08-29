import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from 'express';
import { RequestWithDecoded } from "../types/RequestWithDecoded";

export const authMiddleware = async ( req: Request,
                                      res: Response,
                                      next: NextFunction ) => {
    try {
      const token = req.header('Authorization')?.replace('Bearer ', '');
   
      //if (!token) throw new Error();
      //const payload = jwt.verify(token || "sdfsadfasdfsad", process.env.SECRET_KEY || "");
      const tokenTest = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoic3VjY2VzcyJ9.UpWcWGV7UmkhDYcf0UBXr7zYsehwbeSck6ExzTsrbgE"
      const payload = jwt.verify(tokenTest, "testmessage");
      (req as RequestWithDecoded).decoded = payload
   
      next();
    } catch (error) {
      res.status(401).json({ error: true, errorMessage: 'Missing authorization token' })
    }
};