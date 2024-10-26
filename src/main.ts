import { NestFactory } from '@nestjs/core';
import { appmodule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(appmodule);
  await app.listen(3000);
}
bootstrap();
