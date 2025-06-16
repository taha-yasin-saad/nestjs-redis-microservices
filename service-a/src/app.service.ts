import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject('MATH_SERVICE') private client: ClientProxy) {}

  async double(num: number): Promise<number> {
    console.log('🚀 Sending number to Redis:', num);
    const result$ = this.client.send<number, number>('double', num);
    const result = await firstValueFrom(result$);
    console.log('✅ Received from Redis:', result);
    return result;
  }
}