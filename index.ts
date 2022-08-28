import express, { Express, Request, Response } from 'express';
import * as crypto from "crypto";
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import { usePrisma } from './hooks/usePrisma';

dotenv.config();

const app: Express = express();
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT;

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({message: "Server is running!"})
});

app.post('/signup', async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;
    const salt = bcrypt.genSaltSync()
    const passwordHash = bcrypt.hashSync(password, salt)
    const emailToken = crypto.randomBytes(3).toString('hex');

    await usePrisma.user.create({
      data: {
        email,
        password: passwordHash,
        username,
        salt,
        emailToken
      }
    })
    res.status(200).json({message: "Cadastro efetuado!"})
  } catch (error: any) {
    res.status(500).json({error: "Ocorreu um erro durante o cadastro."})
  }
})

app.post('/login', async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await usePrisma.user.findUnique({
      where: {
        email
      },
    })
    if(bcrypt.compareSync(password, user?.password ?? "")){
      res.status(200).json({message: "Login efetuado!"})
    } else {
      res.status(404).json({error: "Email e/ou senha errado(s)."})
    }
  } catch (error: any) {
    res.status(500).json({error: "Ocorreu um erro durante o cadastro."})
  }
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});