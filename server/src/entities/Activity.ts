import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Grade } from "./Grade";
import { Module } from "./Module";

@Entity("activities")
export class Activity {
  @PrimaryColumn()
  readonly id?: string;

  @Column()
  title!: string;

  @OneToOne(() => Grade)
  grade!: Grade;

  @ManyToOne(() => Module)
  module!: Module;

  @CreateDateColumn()
  created_at!: Date;

  @Column()
  deadline!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
