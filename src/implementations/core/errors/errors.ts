import { DepositError } from './deposit.err.impl';
import { GeneralError } from './general.err.impl';
import { UserCreateError } from './user-create.err.impl';
import { UserDoesNotExistError } from './user-does-not-exists.err.impl';
import { UserExistsError } from './user-exists.err.impl';
import { ValidationError } from './validation.err.impl';
import { UserHasNoBalanceError } from './user-has-no-balance.err.impl';
import { TransferError } from './transfer.err.impl';
import { CustomError } from '../../../app/core/definitions/custom-error';

export const ERROR: Record<string, CustomError> = {
  general: new GeneralError(),
  validation: new ValidationError(),
  deposit: new DepositError(),
  userDoesNotExists: new UserDoesNotExistError(),
  userCreate: new UserCreateError(),
  userExists: new UserExistsError(),
  userHasNoBalance: new UserHasNoBalanceError(),
  transfer: new TransferError(),
};
