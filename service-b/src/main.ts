import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.REDIS,
    options: {
      host: 'redis_micro',
      port: 6379,
    },
  });

  await app.startAllMicroservices();
  console.log('✅ Redis microservice started');
  await app.listen(3001);
}
bootstrap();