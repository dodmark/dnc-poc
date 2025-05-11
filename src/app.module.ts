import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DncModule } from './dnc/dnc.module';

@Module({
  imports: [ConfigModule.forRoot(), DncModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
