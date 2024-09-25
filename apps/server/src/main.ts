import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthGuard } from './core/auth/guards/auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // app.useGlobalGuards(new AuthGuard());
  await app.listen(3000);
}
bootstrap();
