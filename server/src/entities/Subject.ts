import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { Module } from "./Module";
import { User } from "./User";

@Entity("subjects")
export class Subject {
  @PrimaryColumn()
  readonly id?: string;

  @Column()
  title!: string;

  @ManyToOne(() => User, (user) => user.subjectsTeached)
  teacher!: User;

  @ManyToMany(() => User, (user) => user.subjectsStudied)
  students!: User[];

  @OneToMany(() => Module, (module) => module.subject)
  modules!: Module[];
}
