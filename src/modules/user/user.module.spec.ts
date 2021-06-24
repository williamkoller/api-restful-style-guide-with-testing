import { Test, TestingModule } from '@nestjs/testing';
import { UserModule } from './user.module';

describe('UserModule', () => {
  let repository;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserModule],
    }).compile();
    repository = module.get<UserModule>(UserModule);
  });
  it('should be called with correct params', () => {
    expect(repository).toBeDefined();
  });
});
