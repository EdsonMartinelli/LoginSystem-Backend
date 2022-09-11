import { IRevalidateTokenController } from "./IRevalidateTokenController";

class RevalidateTokenController implements IRevalidateTokenController{
  
    async execute(token: string) {
        return token
    }
}

export { RevalidateTokenController }