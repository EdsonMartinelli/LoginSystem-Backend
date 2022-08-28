import express, { Express } from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import { usersRouter } from './routes/userRoutes';

dotenv.config();

const port = process.env.PORT;
const app: Express = express();

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(usersRouter);

/*app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({message: "Server is running!"})
});*/

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});