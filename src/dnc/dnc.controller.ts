import { Controller, Get } from '@nestjs/common';
import { DncService } from './dnc.service';

@Controller('dnc')
export class DncController {
  constructor(private dncService: DncService) {}
  
  @Get()
  findAll() {
    return this.dncService.findAll();
  }
}
