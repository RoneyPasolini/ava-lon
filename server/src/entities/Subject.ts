import { Entity, PrimaryColumn } from "typeorm";

@Entity("subjects")
export class Subject {
  @PrimaryColumn()
  readonly id?: string;
}
