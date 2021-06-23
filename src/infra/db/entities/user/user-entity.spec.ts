import TestUtilUser from '@/infra/db/entities/test/TestUtilUser';

describe('UserEntity class', () => {
  it('should be called with correct params', () => {
    const user = TestUtilUser.giveAMeAValidUser();
    expect(user).toBeTruthy();
    expect(user.name).toBe('any_name');
    expect(user.surname).toBe('any_surname');
    expect(user.email).toBe('any_mail@email.com');
    expect(user.password).toBe('any_password');
    expect(user.createdAt).toEqual(new Date('2021-06-23T00:58:05.581Z'));
    expect(user.updatedAt).toEqual(new Date('2021-06-23T00:58:05.581Z'));
  });
});
