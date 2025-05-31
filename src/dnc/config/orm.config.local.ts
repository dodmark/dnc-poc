import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DNCSource } from 'src/dnc/entities/dnc-source.entity';
import { DNCMaster} from 'src/dnc/entities/dnc-master.entity';

export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'gh',
    password: process.env.PG_DEV_PASSWORD,
    database: 'gh',
    entities: [DNCSource, DNCMaster],
    synchronize: false,
  }),
);
