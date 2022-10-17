import { PrimitiveError } from "../PrimitiveError";

export class InvalidCredentialsError extends PrimitiveError {
  private readonly statusCode = 401;

  constructor(details?: any) {
    super("Invalid credentials!");
    this.details = details;
    this.status = this.statusCode;
  }
}
