import { ID } from '../../../../app/core/definitions/id';
import { SignupOutput } from '../../../../app/signup/signup.out';
import { SignupPresenter, SignupPresenterOutput } from './signup.presenter';

export class SignupPresenterImp implements SignupPresenter {
  present(data: SignupOutput): Promise<SignupPresenterOutput> {
    return Promise.resolve({ id: data.user.id as ID });
  }
}
