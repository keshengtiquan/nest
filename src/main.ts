import { NestFactory } from '@nestjs/core';
import Validate from './common/validate';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new Validate());
  await app.listen(3000);
}
bootstrap();
