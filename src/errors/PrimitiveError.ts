export class PrimitiveError extends Error {
  public status: number;
  public details: any;

  constructor(message: string) {
    super(message);
    this.status = 400;
  }
}
