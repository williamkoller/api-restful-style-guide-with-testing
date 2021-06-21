import { NestApplication, NestFactory } from '@nestjs/core';
import { CentralModule } from '@/central/central.module';

async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(CentralModule);
  await app.listen(process.env.PORT);
}
bootstrap();
