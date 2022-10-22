import { PrimitiveError } from "../PrimitiveError";

export class InvalidUpdateError extends PrimitiveError {
  private readonly statusCode = 405;

  constructor(details?: any) {
    super("Invalid update!");
    this.details = details;
    this.status = this.statusCode;
  }
}
