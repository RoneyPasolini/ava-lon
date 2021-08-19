import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Question } from "./Question";

@Entity("answers")
export class Answer {
  @PrimaryColumn()
  readonly id: string;

  @ManyToOne(() => Question, (question) => question.answers)
  question!: Question;

  @Column()
  text!: string;

  @Column()
  isCorrect!: boolean;

  constructor() {
    this.id = uuidv4();
  }
}
