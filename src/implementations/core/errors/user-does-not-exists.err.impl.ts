import { CustomError } from '../../../app/core/definitions/custom-error';

export class UserDoesNotExistError extends CustomError {
  name = 'UserDoesNotExistError';

  constructor() {
    super();
  }

  toString(): string {
    return `${this.name}:${JSON.stringify(this.data, null, 2)}`;
  }
}
