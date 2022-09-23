import { JWTVerifierController } from "./JWTVerifierController";
import { JWTVerifierDTO } from "./JWTVerifierDTO";

export function JWTVerifierInstance() {
  return new JWTVerifierDTO(new JWTVerifierController());
}
