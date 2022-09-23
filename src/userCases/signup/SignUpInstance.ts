import { PrismaUserRepository } from "../../repositories/prisma/PrismaUserRepository";
import { SignUpController } from "./SignUpController";
import { SignUpDTO } from "./SignUpDTO";

export function SignUpInstance() {
  return new SignUpDTO(new SignUpController(new PrismaUserRepository()));
}
