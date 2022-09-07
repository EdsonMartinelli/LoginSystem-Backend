import { PrismaUserRepository } from "../../../repositories/prisma/PrismaUserRepository";
import { LoginController } from "./LoginController";
import { LoginDTO } from "./LoginDTO";

export function InstanceLogin(){
   return new LoginDTO( new LoginController( new PrismaUserRepository()))
}