import { NestApplication, NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(ApplicationModule);
  await app.listen(process.env.PORT);
}
bootstrap();
