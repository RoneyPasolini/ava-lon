import { Entity, PrimaryColumn } from "typeorm";

@Entity("modules")
export class Module {
  @PrimaryColumn()
  readonly id?: string;
}
