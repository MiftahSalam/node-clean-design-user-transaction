import { asClass } from 'awilix';

import { app } from '../register';
import { DepositPresenterImpl } from './presenter/deposit/deposit.presenter.impl';
import { SignupPresenterImp } from './presenter/signup/signup.presenter.impl';
import { TransferPresenterImpl } from './presenter/transfer/tranfer.presenter.impl';

app.container.register({
  signupPresenter: asClass(SignupPresenterImp),
  depositPresenter: asClass(DepositPresenterImpl),
  transferPresenter: asClass(TransferPresenterImpl),
});
