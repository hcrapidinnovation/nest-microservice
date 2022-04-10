import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('MicroService', 'getHello')
  async getHello(request) {
    return await this.appService.getHello(request?.name || '');
  }
}
