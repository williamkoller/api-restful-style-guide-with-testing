import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';

describe('AppModule', () => {
  let appModule;
  beforeAll(() => {
    process.env = Object.assign(process.env, {
      POSTGRES_HOST: 'localhost',
      POSTGRES_PORT: 5432,
      POSTGRES_USER: 'admin_user_api_restful',
      POSTGRES_PASSWORD: 'q1w2e3r4t5y6',
      POSTGRES_DATABASE: 'admin_database_api_restful',
      DATABASE_PROD:
        'postgres://admin_user_api_restful:q1w2e3r4t5y6@localhost:5432/admin_database_api_restful',
    });
  });
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
