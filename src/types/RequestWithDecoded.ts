import { JwtPayload } from "jsonwebtoken"
import { Request} from 'express';

export type RequestWithDecoded= Request & {
    token?: string,
    decoded? : string | JwtPayload
}