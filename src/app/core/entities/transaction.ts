import { ID } from '../definitions/id';
import { Entity } from './entity';
import { User } from './user';

export enum TRANSACTION_TYPE {
  DEPOSIT = 'deposit',
  TRANSFER = 'transfer',
}

export class Transaction implements Entity {
  constructor(
    public from: User,
    public to: User,
    public value: number,
    public type: TRANSACTION_TYPE,
    public id?: ID,
  ) {}
}
