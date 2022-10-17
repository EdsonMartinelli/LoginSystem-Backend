import { PrimitiveError } from "../PrimitiveError";

export class InvalidEmailTokenError extends PrimitiveError {
  private readonly statusCode = 401;

  constructor(details?: any) {
    super("Email token for validate is incorrect!");
    this.details = details;
    this.status = this.statusCode;
  }
}
