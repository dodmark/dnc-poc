import {
  Column,
  PrimaryColumn,
  CreateDateColumn,
  Entity,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class DNCMaster {
    @PrimaryColumn({
        type: 'varchar',
        length: 10,
        name: 'phone_number',
    })
    phoneNumber: string;
    
    @Column({
        type: 'smallint'
    })
    source: number;
    
    @Column({
        type: 'numeric',
        width: 3
    })
    confidence: number;
    
    @Column()
    link: string; //maybe should be a URL type?
    
    @CreateDateColumn({
        type: 'timestamp',
        name: 'created_timestamp'
    })
    createdTimestamp: Date;
    
    @UpdateDateColumn({
        type: 'timestamp',
        name: 'updated_timestamp'
    })
    updatedTimestamp: Date;
}