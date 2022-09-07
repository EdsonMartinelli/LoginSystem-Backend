import { Router } from 'express';
import { Request, Response } from 'express';
import { InstanceLogin } from '../modules/userCases/login/InstanceLogin';
import { InstanceSignUp } from '../modules/userCases/signup/InstanceSignUp';


export const usersRouter = Router();

usersRouter.post('/signup', (req: Request, res: Response) => {
    InstanceSignUp().handle(req, res)
})
  
usersRouter.post('/login',(req: Request, res: Response) => {
    InstanceLogin().handle(req, res)
})
  