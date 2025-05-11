import { Module } from '@nestjs/common';
import { DncService } from './dnc.service';
import { DncController } from './dnc.controller';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ConfigModule],
  providers: [DncService],
  controllers: [DncController]
})
export class DncModule {}
