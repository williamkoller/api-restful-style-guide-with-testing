import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';

describe('AppModule', () => {
  let repository;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    repository = module.get<AppModule>(AppModule);
  });
  it('should be called with pcorrect params', () => {
    expect(repository).toBeDefined();
  });
});
