import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthGuard } from './core/auth/guards/auth.guard';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.enableCors({
    origin: '*',
  });
  app.useLogger(app.get(Logger));
  await app.listen(3000);
}
bootstrap();
