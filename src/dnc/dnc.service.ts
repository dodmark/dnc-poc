import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DncService {
    constructor(private configService: ConfigService) {}

    findAll() {

        const pg = require('knex')({
            client: 'pg',
            connection: {
            //   connectionString: config.DATABASE_URL,
                host: this.configService.get<string>('POSTGRES_HOST'),
                port: this.configService.get<string>('POSTGRES_PORT'),
                user: this.configService.get<string>('POSTGRES_USER'),
                database: this.configService.get<string>('POSTGRES_DATABASE'),
                password: this.configService.get<string>('POSTGRES_PASSWORD'),
                // ssl: config['DB_SSL'] ? { rejectUnauthorized: false } : false,
            },
        });
  
        const isInDNC = async () => {
            const results = await pg.select('phone_number').from('dnc_master').limit(1);
            return results;
        }

        return isInDNC();
        // return 'Get Bent, Asshole';
   } 
}
