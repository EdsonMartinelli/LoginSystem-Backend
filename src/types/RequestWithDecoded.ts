import { JwtPayload } from "jsonwebtoken"
import { Request} from 'express';

export type RequestWithDecoded= Request & {
    decoded? : string | JwtPayload
}