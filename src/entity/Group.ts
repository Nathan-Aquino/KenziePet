import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @Column()
  scientific_name: string;

  constructor(name: string, scientific_name: string) {
    this.name = name;
    this.scientific_name = scientific_name;
  }
}
