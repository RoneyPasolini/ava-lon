import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Activity } from "./Activity";
import { Question } from "./Question";

@Entity("quizzes")
export class Quiz {
  @PrimaryColumn()
  readonly id?: string;

  @OneToOne(() => Activity)
  activity!: Activity;

  @OneToMany(() => Question, (question) => question.quiz)
  questions!: Question[];

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
