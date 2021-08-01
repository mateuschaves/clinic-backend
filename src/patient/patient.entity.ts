import {
  BaseEntity,
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Patient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  gender: string;

  @Column({
    type: 'decimal',
  })
  weight: number;

  @Column({
    type: 'decimal',
  })
  height: number;

  @Column()
  birthdate: Date;

  @Column()
  medication: string;

  @DeleteDateColumn()
  deletedAt?: Date;
}
