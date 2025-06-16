// Exposes a REST endpoint: GET /double/:num
// It sends the number to service-b via Redis and returns the doubled result
import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('double/:num')
  async double(@Param('num') num: string) {
    const parsed = parseInt(num, 10);
    return { result: await this.appService.double(parsed) };
  }
}