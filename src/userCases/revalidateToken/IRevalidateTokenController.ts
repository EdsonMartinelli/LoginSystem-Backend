import { tokenInfoProps } from "../../middleware/JWT/IJWTVerifierController";

interface IRevalidateTokenController {
  execute: (tokenInfo: tokenInfoProps) => string;
}

export { IRevalidateTokenController };
