import { tokenInfoProps } from "../../middleware/IJWTVerifierController"

interface IRevalidateTokenController {
    execute(tokenInfo : tokenInfoProps) : string
}

export {IRevalidateTokenController}