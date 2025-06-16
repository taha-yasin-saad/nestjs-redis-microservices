// Listens for 'double' messages via Redis and responds with doubled values
import { Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Injectable()
export class AppService {
  @MessagePattern('double')
  handleDouble(num: number): number {
    console.log('📨 Received number in service-b:', num);
    return num * 2;
  }
}