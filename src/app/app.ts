import { DepositInput } from './deposit/deposit.in';
import { DepositOutput } from './deposit/deposit.out';
import { DepositInteractor } from './deposit/deposit.interactor';
import { SignupInput } from './signup/signup.in';
import { SignupOutput } from './signup/signup.out';
import { SignupInteractor } from './signup/signup.interactor';
import { TransferInput } from './transfer/transfer.in';
import { TransferOutput } from './transfer/transfer.out';
import { TransferInteractor } from './transfer/transfer.interactor';

export class App {
  constructor(
    private signupInteractor: SignupInteractor,
    private depositInteractor: DepositInteractor,
    private transferInteractor: TransferInteractor,
  ) {}

  async signUp(signupInput: SignupInput): Promise<SignupOutput> {
    return await this.signupInteractor.execute(signupInput);
  }
  async deposit(depositInput: DepositInput): Promise<DepositOutput> {
    return await this.depositInteractor.execute(depositInput);
  }
  async transfer(transferInput: TransferInput): Promise<TransferOutput> {
    return await this.transferInteractor.execute(transferInput);
  }
}
