import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';

describe('AppModule', () => {
  let appModule;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    appModule = module.get<AppModule>(AppModule);
  });
  it('should be called with correct params', () => {
    expect(appModule).toBeDefined();
  });
});
