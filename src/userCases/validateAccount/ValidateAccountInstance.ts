import { PrismaUserRepository } from "../../repositories/prisma/PrismaUserRepository";
import { ValidateAccountController } from "./ValidateAccountController";
import { ValidateAccountDTO } from "./ValidateAccountDTO";

export function ValidateAccountInstance() {
  return new ValidateAccountDTO(
    new ValidateAccountController(new PrismaUserRepository())
  );
}
