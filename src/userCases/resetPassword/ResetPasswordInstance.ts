import { PrismaUserRepository } from "../../repositories/prisma/PrismaUserRepository";
import { ResetPasswordController } from "./ResetPasswordController";
import { ResetPasswordUseCase } from "./ResetPasswordUseCase";

export function ResetPasswordInstance() {
  return new ResetPasswordController(
    new ResetPasswordUseCase(new PrismaUserRepository())
  );
}
