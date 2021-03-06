import {DefaultCrudRepository} from '@loopback/repository';
import {User} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';
export type Credentials = {
  email: string;
  password: string;
};

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(User, dataSource);
  }
}
