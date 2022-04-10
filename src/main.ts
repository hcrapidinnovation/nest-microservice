import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';
import { config } from 'dotenv';

config({ path: join(__dirname, '../.env') });

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        AppModule,
        {
            transport: Transport.GRPC,
            options: {
                package: 'microservice',
                protoPath: join(__dirname, '_proto/microservice.proto')
            }
        }
    );
    await app.listen();
}
bootstrap();
