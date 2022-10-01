import { RevalidateTokenController } from "./RevalidateTokenController";
import { RevalidateTokenUseCase } from "./RevalidateTokenUseCase";

export function RevalidateTokenInstance() {
  return new RevalidateTokenController(new RevalidateTokenUseCase());
}
