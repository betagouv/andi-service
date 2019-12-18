export class HTTPValidationError {
  constructor(public detail: ValidationError[]) {}
}

export class ValidationError {

  constructor(
    public loc: string[],
    public msg: string,
    public type: string
  ) {}
}
