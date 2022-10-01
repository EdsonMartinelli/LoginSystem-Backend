import { PrismaUserRepository } from "../../repositories/prisma/PrismaUserRepository";
import { NodemailerUserService } from "../../services/emailService/nodemailer/NodemailerUserService";
import { SignUpController } from "./SignUpController";
import { SignUpUseCase } from "./SignUpUseCase";

export function SignUpInstance() {
  return new SignUpController(
    new SignUpUseCase(new PrismaUserRepository(), new NodemailerUserService())
  );
}
