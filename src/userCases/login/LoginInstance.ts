import { PrismaUserRepository } from "../../repositories/prisma/PrismaUserRepository";
import { LoginController } from "./LoginController";
import { LoginUseCase } from "./LoginUseCase";

export function LoginInstance() {
  return new LoginController(new LoginUseCase(new PrismaUserRepository()));
}
