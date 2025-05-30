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
    @Column()
    source: number;
    @Column()
    confidence: number;
    @Column()
    link: string; //maybe should be a URL type?
    @CreateDateColumn()
    createdTimestamp: Date;
    @UpdateDateColumn()
    updatedTimestamp: Date;
}