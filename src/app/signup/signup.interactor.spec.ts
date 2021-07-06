import { SignupInteractor } from './signup.interactor';
import { TestEnvironment } from '../../test-environment';
import { SignupOutput } from './signup.out';
import { SignupInput } from './signup.in';
import { ValidatorResult } from '../core/definitions/validator-result';

const validatorResult: ValidatorResult = { valid: true, error: null };
const insertResult = { id: 10};

function isSignupOutput(output: SignupOutput): output is SignupOutput {
    return (output as SignupOutput) !== undefined;
}

describe('Signup Interactor', () => {
    let interactor: SignupInteractor;
    let signupValidator;
    let signupRepository;
    let errorFactory;

    beforeEach(() => {
        signupValidator = {
            validate: jest.fn(() => {
                return validatorResult;
            }),
        };
        signupRepository = {
            findUserByUsername: jest.fn(async () => Promise.resolve(null)),
            createUser: jest.fn(async () => Promise.resolve(insertResult)),
        };
        errorFactory = {
            getError: jest.fn(() => new Error('user'))
        };
        interactor = TestEnvironment.createInstance(SignupInteractor, [
            {
                name: 'signupValidator',
                useValue: signupValidator,
            },
            {
                name: 'signupRepository',
                useValue: signupRepository,
            },
            {
                name: 'errorFactory',
                useValue: errorFactory,
            },
        ]) as SignupInteractor;
    });

    describe('exeute', () => {
        it('it should works', async () => {
            const request: SignupInput = {
                firstname: 'JOHN',
                lastname: 'Connan',
                email: 'johnconnan@jk.com',
                username: 'johnconnan',
                password: 'passwd',        
            };
            const response = await interactor.execute(request);
            const isCorrectResponse = isSignupOutput(response);
            expect(isCorrectResponse).toBeTruthy();
        })
    })
})