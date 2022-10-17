import { PrimitiveError } from "../PrimitiveError";

export class NoTokenError extends PrimitiveError {
  private readonly statusCode = 401;

  constructor(details?: any) {
    super("There is no token in request!");
    this.details = details;
    this.status = this.statusCode;
  }
}
