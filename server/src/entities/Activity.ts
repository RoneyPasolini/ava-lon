import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
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

  @Column()
  grade_id!: string;

  @JoinColumn({ name: "grade_id" })
  @OneToOne(() => Grade)
  grade!: Grade;

  @Column()
  module_id!: string;

  @JoinColumn({ name: "module_id" })
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
