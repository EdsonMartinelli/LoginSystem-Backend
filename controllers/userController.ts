import { Request, Response } from 'express';
import { usePrisma } from '../hooks/usePrisma';
import * as crypto from "crypto";
import bcrypt from 'bcryptjs'

export const SignUp = async (req: Request, res: Response) => {
    try {
      const password = req.body.password;
      const salt = bcrypt.genSaltSync()
      const passwordHash = bcrypt.hashSync(password, salt)
      const emailToken = crypto.randomBytes(3).toString('hex');
  
      await usePrisma.user.create({
        data: {
          email: req.body.email,
          password: passwordHash,
          username: req.body.username,
          salt,
          emailToken
        }
      })
      res.status(200).json({message: "Success!"})
    } catch (error: any) {
      res.status(500).json({error: "A error happened in sign up."})
    }
}

export const Login = async (req: Request, res: Response) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await usePrisma.user.findUnique({ where: { email } })
        
        if(bcrypt.compareSync(password, user?.password ?? "")){
          res.status(200).json({message: "Success!"})
        } else {
          res.status(404).json({error: "Wrong email or password."})
        }
    } catch (error: any) {
        res.status(500).json({error: "A error happened in login."})
    }
}