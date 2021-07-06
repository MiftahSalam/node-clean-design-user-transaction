import { CustomError } from '../../../app/core/definitions/custom-error';

export class ValidationError extends CustomError {
  name = 'validationError';

  constructor() {
    super();
  }

  toString(): string {
    return `${this.name}:
    ${JSON.stringify(this.data, null, 2)}`;
  }
}
