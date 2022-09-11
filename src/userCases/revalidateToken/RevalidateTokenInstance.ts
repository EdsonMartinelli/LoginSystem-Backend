import { RevalidateTokenController } from "./RevalidateTokenController";
import { RevalidateTokenDTO } from "./RevalidateTokenDTO";

export function RevalidateTokenInstance(){
    return new RevalidateTokenDTO( new RevalidateTokenController())
}