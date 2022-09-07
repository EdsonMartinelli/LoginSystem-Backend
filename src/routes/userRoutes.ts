import { Router } from 'express';
import { Request, Response } from 'express';
import { LoginController } from '../modules/userCases/login/LoginController';
import { SignUpController } from '../modules/userCases/signup/SignUpController';

export const usersRouter = Router();

usersRouter.post('/signup', (req: Request, res: Response) => {
    new SignUpController().handle(req, res)
})
  
usersRouter.post('/login',(req: Request, res: Response) => {
    new LoginController().handle(req, res)
})
  