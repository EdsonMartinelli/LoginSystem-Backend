import { PrismaUserRepository } from "../../repositories/prisma/PrismaUserRepository";
import { NodemailerUserService } from "../../services/emailService/nodemailer/NodemailerUserService";
import { SignUpController } from "./SignUpController";
import { SignUpDTO } from "./SignUpDTO";

export function SignUpInstance() {
  return new SignUpDTO(
    new SignUpController(
      new PrismaUserRepository(),
      new NodemailerUserService()
    )
  );
}
