// Exposes a REST endpoint: GET /square/:num
// It returns the square of a number directly
import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('square/:num')
  square(@Param('num') num: string) {
    const parsed = parseInt(num, 10);
    return { result: parsed * parsed };
  }
}