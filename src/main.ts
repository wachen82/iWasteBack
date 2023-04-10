import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';
import * as cookieParser from 'cookie-parser';
import {ValidationPipe} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.useGlobalPipes(new ValidationPipe());
  app.enableShutdownHooks();
  app.use(cookieParser());
  const configService = app.get(ConfigService);
  const port = configService.get<number>('APP_PORT')
  const corsOrigin = configService.get('CORS_ORIGIN')
  app.enableCors(corsOrigin);

  await app.listen(port);
}
bootstrap();
