import { Test, TestingModule } from '@nestjs/testing';
import { AddUserRepository } from './add-user.repository';

describe('AddUserRepository', () => {
  let addUserRepository;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddUserRepository],
    }).compile();

    addUserRepository = module.get<AddUserRepository>(AddUserRepository);
  });
  it('should be defined', () => {
    expect(addUserRepository).toBeDefined();
  });
});
