import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';



export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 255,
  })
  email: string;

  @Column()
  pwdHash:string;

  @Column({
    nullable: true,
    default: null,

  })
  currentTokenId: string | null;

  @Column()
  role:string;


}
