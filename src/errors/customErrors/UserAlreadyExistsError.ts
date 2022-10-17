import { PrimitiveError } from "../PrimitiveError";

export class UserAlreadyExistsError extends PrimitiveError {
  private readonly statusCode = 403;

  constructor(details?: any) {
    super("User already exists!");
    this.details = details;
    this.status = this.statusCode;
  }
}
