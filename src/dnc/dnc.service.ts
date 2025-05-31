import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
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
   
   fetchDNCRecords(inputList: string[], invert: boolean) {

        const findInDNC = async () => {
            
            const results = await this.repository.find({
                select: { phoneNumber: true },
                where: { phoneNumber: In(inputList) }
            });

            // extract the numbers from the entity into a new string[] array
            const numbers = results.map(x => x.phoneNumber);
            if (invert) {
                return inputList.filter( x => !numbers.includes(x));
            } else {
                return numbers;
            }
        }
        
        return findInDNC();
   }
}
