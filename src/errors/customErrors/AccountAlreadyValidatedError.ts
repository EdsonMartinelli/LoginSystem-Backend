import { PrimitiveError } from "../PrimitiveError";

export class AccountAlreadyValidatedError extends PrimitiveError {
  private readonly statusCode = 403;

  constructor(details?: any) {
    super("Account already validated!");
    this.details = details;
    this.status = this.statusCode;
  }
}
