import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('square/:num')
  square(@Param('num') num: string) {
    const parsed = parseInt(num, 10);
    return { result: parsed * parsed };
  }
}