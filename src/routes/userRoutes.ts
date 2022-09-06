import { Router } from 'express';
import { SignUpUserController } from '../modules/user/signupUser/SignUpUserController';
import { Request, Response } from 'express';
import { LoginUserController } from '../modules/user/loginUser/LoginUserController';

export const usersRouter = Router();

usersRouter.post('/signup', (req: Request, res: Response) => {
    new SignUpUserController().handle(req, res)
})
  
usersRouter.post('/login',(req: Request, res: Response) => {
    new LoginUserController().handle(req, res)
})
  