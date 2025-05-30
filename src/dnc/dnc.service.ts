import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DNCMaster } from './entities/dnc-master.entity';

@Injectable()
export class DncService {
    constructor(private configService: ConfigService, @InjectRepository(DNCMaster) private readonly repository: Repository<DNCMaster>) {}

    findPhoneNumber(phoneNumber: string) {
  
        const isInDNC = async () => {
            
            const results = await this.repository.find({
                select: { phoneNumber: true },
                where: { phoneNumber: phoneNumber }
            });
            return (results.length >0 ? true : false);
        }

        return isInDNC();
   } 
}
