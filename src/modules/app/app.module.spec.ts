import { configService } from '@/infra/db/config/config.service';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppModule } from './app.module';

describe('AppModule', () => {
  let appModule;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(configService.getTypeOrmConfig()[0]),
        AppModule,
      ],
    }).compile();
    appModule = module.get<AppModule>(AppModule);
  });
  it('should be called with correct params', () => {
    expect(appModule).toBeDefined();
  });
});
