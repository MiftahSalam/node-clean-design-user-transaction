import { CustomError } from '../../../app/core/definitions/custom-error';

export class UserHasNoBalanceError extends CustomError {
  name = 'userHasNoBalance';

  constructor() {
    super();
  }

  toString(): string {
    return `${this.name}:
    ${this.data}`;
  }
}
