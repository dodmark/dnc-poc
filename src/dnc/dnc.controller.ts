import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { DncService } from './dnc.service';
import { DNCMaster } from './entities/dnc-master.entity';

@Controller('dnc')
export class DncController {
  constructor(private dncService: DncService) {}
  
  @Get()
  async checkIfDNC(@Query('phoneNumber') phoneNumber: string) {
    return this.dncService.findPhoneNumber(phoneNumber);
  }

  @Post()
  async fetchDNCRecords(@Body() bod: string[], @Query('invert') invert: string): Promise<String[]> {
    return this.dncService.fetchDNCRecords(bod, (invert === 'true'));
  }
}
