import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";

import fastifyCors from '@fastify/cors';

import { AppModule } from "@/app/app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.useGlobalPipes(new ValidationPipe());

  app.register(fastifyCors, {
    origin: ['http://localhost:3000', 'http://localhost:5173'], // Permitir múltiples orígenes
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    credentials: true, // Si necesitas enviar cookies u otros credenciales
  });

  app.setGlobalPrefix("api");
  const configService = app.get(ConfigService);
  const port = configService.get<string>("PORT", "3000");

  await app.listen(port, "0.0.0.0");

  console.log(`App is ready and listening on port ${port} 🚀`);
}

bootstrap().catch(handleError);

function handleError(error: unknown) {
  // eslint-disable-next-line no-console
  console.error(error);
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(1);
}

process.on("uncaughtException", handleError);
