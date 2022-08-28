import { Router } from 'express';
import { login, signUp } from '../controllers/userController';

export const usersRouter = Router();

usersRouter.post('/signup', signUp)
  
usersRouter.post('/login', login)
  