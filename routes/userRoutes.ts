import { Router } from 'express';
import { Login, SignUp } from '../controllers/userController';

export const usersRouter = Router();

usersRouter.post('/signup', SignUp)
  
usersRouter.post('/login', Login)
  