import { Module } from '@nestjs/common';
import { DncService } from './dnc.service';
import { DncController } from './dnc.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from './config/orm.config';
import ormConfigLocal from './config/orm.config.local';
import { DNCMaster } from './entities/dnc-master.entity';
import { DNCSource } from './entities/dnc-source.entity';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ormConfigLocal],
      expandVariables: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory:
      process.env.NODE_ENV !== 'production' ? ormConfigLocal : ormConfig,
    }),
    TypeOrmModule.forFeature([DNCMaster, DNCSource]),
  ],
  providers: [DncService],
  controllers: [DncController]
})
export class DncModule {}
