import TestUtilUser from '@/infra/db/entities/test/TestUtilUser';
import { User } from './user-entity';

describe('UserEntity class', () => {
  it('should be called with correct params', () => {
    const user = TestUtilUser.mockUser();
    expect(user).toBeTruthy();
    expect(user.name).toBe('any_name');
    expect(user.surname).toBe('any_surname');
    expect(user.email).toBe('any_mail@email.com');
    expect(user.password).toBe('any_password');
    expect(user.createdAt).toEqual(new Date('2021-06-23T00:58:05.581Z'));
    expect(user.updatedAt).toEqual(new Date('2021-06-23T00:58:05.581Z'));
  });

  it('should be called the class with the user class only name and surname', () => {
    const user = new User({ name: 'any_name', surname: 'any_surname' });
    const userTest = TestUtilUser.mockUser();
    expect(user).toBeTruthy();
    expect(userTest).toBeTruthy();
    expect(user.name).toBe(userTest.name);
    expect(user.surname).toBe(userTest.surname);
  });
});
