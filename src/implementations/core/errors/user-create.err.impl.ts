import { CustomError } from '../../../app/core/definitions/custom-error';

export class UserCreateError extends CustomError {
  name = 'UserCreateError';

  constructor() {
    super();
  }

  toString(): string {
    return `${this.name}:${this.data}`;
  }
}
