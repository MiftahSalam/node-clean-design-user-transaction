import { CustomError } from '../../../app/core/definitions/custom-error';

export class DepositError extends CustomError {
  name = 'depositError';

  constructor() {
    super();
  }

  toString(): string {
    return `${this.name}:
    ${this.data}`;
  }
}
