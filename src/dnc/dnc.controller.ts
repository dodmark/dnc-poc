import { Controller, Get, Query } from '@nestjs/common';
import { DncService } from './dnc.service';

@Controller('dnc')
export class DncController {
  constructor(private dncService: DncService) {}
  
  @Get()
  async checkIfDNC(@Query('phoneNumber') phoneNumber: string) {
    return this.dncService.findPhoneNumber(phoneNumber);
  }
}
