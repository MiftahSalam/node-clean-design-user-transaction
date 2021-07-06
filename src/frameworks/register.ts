import { asClass, asValue, createContainer, InjectionMode } from 'awilix';
import * as joi from 'joi';

import { App } from '../app/app';
import { DepositInteractor } from '../app/deposit/deposit.interactor';
import { SignupInteractor } from '../app/signup/signup.interactor';
import { TransferInteractor } from '../app/transfer/transfer.interactor';
import { ApplicationErrorFactoryImpl } from '../implementations/core/errors/application-error-factory.err.impl';
import { db } from '../implementations/db';
import { DepositRepositoryImpl } from '../implementations/deposit/deposit.repository.impl';
import { DepositValidatorImpl } from '../implementations/deposit/deposit.validator.impl';
import { SignupRepositoryImpl } from '../implementations/signup/signup.repositoy.impl';
import { SignupValidatorImpl } from '../implementations/signup/signup.validator.impl';
import { TransferRepositoryImpl } from '../implementations/transfer/transfer.repository.impl';
import { TransferValidatorImpl } from '../implementations/transfer/transfer.validator.impl';

const container = createContainer({ injectionMode: InjectionMode.CLASSIC });

container.register({
  db: asValue(db),
  joi: asValue(joi),
  app: asClass(App),
  errorFactory: asClass(ApplicationErrorFactoryImpl),
  signupValidator: asClass(SignupValidatorImpl),
  depositValidator: asClass(DepositValidatorImpl),
  transferValidator: asClass(TransferValidatorImpl),
  signupInteractor: asClass(SignupInteractor),
  depositInteractor: asClass(DepositInteractor),
  transferInteractor: asClass(TransferInteractor),
  signupRepository: asClass(SignupRepositoryImpl),
  depositRepository: asClass(DepositRepositoryImpl),
  transferRepository: asClass(TransferRepositoryImpl),
});

const main = container.resolve<App>('app');
export const app = {
  main,
  container,
};
