import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Group } from "./Group";
import { Characteristic } from "./Characteristic";

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  weight: number;

  @Column()
  sex: string;

  constructor(name: string, age: number, weight: number, sex: string) {
    this.name = name;
    this.age = age;
    this.weight = weight;
    this.sex = sex;
  }

  @ManyToOne(() => Group, (group) => group.id)
  group!: Group;

  @ManyToMany(() => Characteristic)
  @JoinTable()
  characteristics!: Characteristic[];
}
