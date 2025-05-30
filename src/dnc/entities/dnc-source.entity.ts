import {
  Column,
  PrimaryColumn,
  Entity,
} from 'typeorm';

@Entity()
export class DNCSource {
    @PrimaryColumn()
    id: number;
    @Column()
    description: string;
    @Column()
    default_confidence: number;
}