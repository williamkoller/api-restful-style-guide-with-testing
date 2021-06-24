import { User } from '@/infra/db/entities/user/user-entity';

export default class TestUtilUser {
  static mockUser(): User {
    const user: User = {
      id: '33e79936-33b2-4365-a54f-edcaa37db644',
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_mail@email.com',
      password: 'any_password',
      createdAt: new Date('2021-06-23T00:58:05.581Z'),
      updatedAt: new Date('2021-06-23T00:58:05.581Z'),
    };

    return user;
  }
}
