import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrizzleModule } from './core/drizzle/drizzle.module';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './post/post.module';
import { AuthModule } from './core/auth/auth.module';
import { CoreSharedModule } from './core/core.module';
import { LoggerModule } from 'nestjs-pino';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
          }
        },
      },
    }),
    CoreSharedModule,
    PostModule,
    TodoModule,
    ConfigModule.forRoot({ isGlobal: true })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
