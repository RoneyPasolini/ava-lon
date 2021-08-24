import { Entity, PrimaryColumn } from "typeorm";

@Entity("grades")
export class Grade {
  @PrimaryColumn()
  readonly id?: string;
}
