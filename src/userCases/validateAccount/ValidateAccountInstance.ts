import { PrismaUserRepository } from "../../repositories/prisma/PrismaUserRepository";
import { ValidateAccountController } from "./ValidateAccountController";
import { ValidateAccountUseCase } from "./ValidateAccountUseCase";

export function ValidateAccountInstance() {
  return new ValidateAccountController(
    new ValidateAccountUseCase(new PrismaUserRepository())
  );
}
