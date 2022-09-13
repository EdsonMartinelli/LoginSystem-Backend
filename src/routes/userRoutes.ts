import { NextFunction, Router } from 'express';
import { Request, Response } from 'express';
import { JWTVerifierInstance } from '../middleware/JWTVerifierInstance';
import { LoginInstance } from '../userCases/login/LoginInstance';
import { RevalidateTokenInstance } from '../userCases/revalidateToken/RevalidateTokenInstance';
import { SignUpInstance } from '../userCases/signup/SignUpInstance';

export const usersRouter = Router();

usersRouter.post('/signup', (req: Request, res: Response) => {
    SignUpInstance().handle(req, res)
})
  
usersRouter.post('/login', (req: Request, res: Response) => {
    LoginInstance().handle(req, res)
})

usersRouter.get('/revalidateToken',
    (req: Request, res: Response, next: NextFunction) => {
        JWTVerifierInstance().handle(req, res, next)
    },

    (req: Request, res: Response) => {
        RevalidateTokenInstance().handle(req, res)
    }
)
  