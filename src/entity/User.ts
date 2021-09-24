import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import bcrypt from "bcrypt";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  is_superuser: boolean;

  constructor(username: string, password: string, is_superuser: boolean) {
    this.username = username;
    this.password = password;
    this.is_superuser = is_superuser;
  }

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }
}
