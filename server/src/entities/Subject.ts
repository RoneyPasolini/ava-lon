import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Module } from "./Module";
import { User } from "./User";

@Entity("subjects")
export class Subject {
  @PrimaryColumn()
  readonly id?: string;

  @Column()
  title!: string;

  @Column()
  teacher_id!: string;

  @JoinColumn({ name: "teacher_id" })
  @ManyToOne(() => User, (user) => user.subjectsTeached)
  teacher!: User;

  @ManyToMany(() => User, (user) => user.subjectsStudied)
  students!: User[];

  @OneToMany(() => Module, (module) => module.subject)
  modules!: Module[];

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
