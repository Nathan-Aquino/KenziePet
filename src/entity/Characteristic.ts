import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Characteristic {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
