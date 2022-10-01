import { JWTVerifierController } from "./JWTVerifierController";
import { JWTVerifierMiddleware } from "./JWTVerifierMiddleware";

export function JWTVerifierInstance() {
  return new JWTVerifierController(new JWTVerifierMiddleware());
}
