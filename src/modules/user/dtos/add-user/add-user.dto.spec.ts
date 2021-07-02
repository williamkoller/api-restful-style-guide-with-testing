import { AddUserDto } from './add-user.dto';

describe('AddUserDto', () => {
  it('should create AddUserDto object', () => {
    const addUserDto: AddUserDto = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'any_mail@email.com',
      password: 'any_password',
    };
    expect(addUserDto).toBeTruthy();
    expect(addUserDto.name).toBe('any_name');
    expect(addUserDto.surname).toBe('any_surname');
    expect(addUserDto.email).toBe('any_mail@email.com');
    expect(addUserDto.password).toBe('any_password');
  });
});
