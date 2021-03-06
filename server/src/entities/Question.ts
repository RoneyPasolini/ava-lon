import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Answer } from "./Answer";
import { Quiz } from "./Quiz";

@Entity("questions")
export class Question {
  @PrimaryColumn()
  readonly id?: string;

  @Column()
  text!: string;

  @OneToMany(() => Answer, (answer) => answer.question)
  answers!: Answer[];

  @Column()
  quiz_id!: string;

  @JoinColumn({ name: "quiz_id" })
  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz!: Quiz;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
