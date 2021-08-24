import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
import { Activity } from "./Activity";
import { User } from "./User";

@Entity("grades")
export class Grade {
  @PrimaryColumn()
  readonly id?: string;

  @Column()
  max_value!: number;

  @Column()
  value_earned!: number;

  @OneToOne(() => Activity)
  actitivy!: Activity;

  @OneToOne(() => User)
  student!: User;
}
