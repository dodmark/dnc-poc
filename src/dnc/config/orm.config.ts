import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DNCSource } from 'src/dnc/entities/dnc-source.entity';
import { DNCMaster} from 'src/dnc/entities/dnc-master.entity';

export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: '192.168.1.185',
    port: 5432,
    username: 'gh',
    password: process.env.PG_PROD_PASSWORD,
    database: 'gh',
    entities: [DNCSource, DNCMaster],
    synchronize: false,
  }),
);
