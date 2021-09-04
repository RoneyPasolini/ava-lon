import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
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

  @Column()
  activity_id!: string;

  @JoinColumn({ name: "activity_id" })
  @OneToOne(() => Activity)
  actitivy?: Activity;

  @Column()
  student_id!: string;

  @JoinColumn({ name: "student_id" })
  @OneToOne(() => User)
  student?: User;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
