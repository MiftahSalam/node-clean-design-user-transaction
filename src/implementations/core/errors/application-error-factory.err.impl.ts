import { ApplicationErrorFactory } from '../../../app/core/definitions/application-error-factory';
import { CustomError, ErrorDataType } from '../../../app/core/definitions/custom-error';
import { ERROR } from './errors';

export class ApplicationErrorFactoryImpl implements ApplicationErrorFactory {
  getError(name: string, data?: ErrorDataType): CustomError {
    const errorImpl = ERROR[name as keyof typeof ERROR] || ERROR['general'];
    const params = data || {};

    errorImpl.initialize(params);

    return errorImpl;
  }
}
