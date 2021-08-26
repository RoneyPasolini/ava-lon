import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Question } from "./Question";

@Entity("answers")
export class Answer {
  @PrimaryColumn()
  readonly id?: string;

  @Column()
  question_id!: string;

  @JoinColumn({ name: "question_id" })
  @ManyToOne(() => Question, (question) => question.answers)
  question!: Question;

  @Column()
  text!: string;

  @Column()
  isCorrect!: boolean;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
