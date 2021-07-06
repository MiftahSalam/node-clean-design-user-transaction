import { ID } from '../../app/core/definitions/id';
import { User } from '../../app/core/entities/user';
import { SignupRepository } from '../../app/signup/signup.repository';
import { Database } from '../db';
import { UserModel } from '../db/user-model';

export class SignupRepositoryImpl implements SignupRepository {
  constructor(private db: Database) {}

  findUserByUsername(username: string): Promise<User | null> {
    const user = this.db.users.findOne({ username });

    // console.log("implementation-signup-SignupRepositoryImpl-findUserByUsername username",username)
    // console.log("implementation-signup-SignupRepositoryImpl-findUserByUsername users",user)

    if (user) {
      return Promise.resolve((user as UserModel).toEntity());
    }

    return Promise.resolve(null);
  }
  createUser(user: User): Promise<ID> {
    const userModel = new UserModel(user);
    const userDB = this.db.users.insert(userModel);

    if (userDB) {
      return Promise.resolve(userDB.$loki as ID);
    }

    return Promise.reject();
  }
}
