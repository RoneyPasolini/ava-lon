import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Answer } from "./Answer";

@Entity("questions")
export class Question {
  @PrimaryColumn()
  readonly id?: string;

  @Column()
  text!: string;

  @OneToMany(() => Answer, (answer) => answer.question)
  answers!: Answer[];

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
