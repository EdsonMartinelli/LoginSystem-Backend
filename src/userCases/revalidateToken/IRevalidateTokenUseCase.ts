import { tokenInfoProps } from "../../middleware/JWT/IJWTVerifierMiddleware";

interface IRevalidateTokenUseCase {
  execute: (tokenInfo: tokenInfoProps) => string;
}

export { IRevalidateTokenUseCase };
