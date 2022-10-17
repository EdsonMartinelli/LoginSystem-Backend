import { PrimitiveError } from "../PrimitiveError";

export class UserDoesNotExistError extends PrimitiveError {
  private readonly statusCode = 404;

  constructor(details?: any) {
    super("User does not exist!");
    this.details = details;
    this.status = this.statusCode;
  }
}
