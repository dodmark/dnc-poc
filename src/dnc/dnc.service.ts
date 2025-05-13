import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DncService {
    constructor(private configService: ConfigService) {}

    findPhoneNumber(phoneNumber: string) {

        const pg = require('knex')({
            client: 'pg',
            connection: {
            //   connectionString: config.DATABASE_URL,
                host: this.configService.get<string>('POSTGRES_HOST'),
                port: this.configService.get<string>('POSTGRES_PORT'),
                user: this.configService.get<string>('POSTGRES_USER'),
                database: this.configService.get<string>('POSTGRES_DATABASE'),
                password: this.configService.get<string>('POSTGRES_PASSWORD'),
            },
        });
  
        const isInDNC = async () => {
            const results = await pg.select('phone_number').from('dnc_master').where('phone_number', phoneNumber).limit(1);
            return (results.length >0 ? true : false);
        }

        return isInDNC();
   } 
}
