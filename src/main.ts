import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/modules/app/app.module';
import { Logger } from '@nestjs/common';
import { swaggerConfig } from '@/docs/swagger/swagger.config';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  swaggerConfig(app);
  await app.listen(process.env.PORT, () => logger.log(`App running 🔥`));
}
bootstrap();
