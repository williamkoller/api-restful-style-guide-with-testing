import { Test, TestingModule } from '@nestjs/testing';
import { AddUserRepository } from './add-user.repository';
import TestUtilUser from '@/infra/db/entities/test/TestUtilUser';

describe('AddUserRepository', () => {
  let addUserRepository: AddUserRepository;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddUserRepository],
    }).compile();

    addUserRepository = module.get<AddUserRepository>(AddUserRepository);
    addUserRepository.create = jest.fn();
    addUserRepository.save = jest.fn();
  });
  it('should be defined', () => {
    expect(addUserRepository).toBeDefined();
  });

  it('should be called save with correct params', async () => {
    const user = TestUtilUser.mockUser();
    const newUser = (addUserRepository.create = jest
      .fn()
      .mockReturnValue(user));
    addUserRepository.save = jest.fn().mockReturnValue(newUser);
    await addUserRepository.addUser(user);
    expect(addUserRepository.save).toBeCalledWith(user);
  });
});
