import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Activity } from "./Activity";
import { Subject } from "./Subject";

@Entity("modules")
export class Module {
  @PrimaryColumn()
  readonly id?: string;

  @Column()
  title!: string;

  @ManyToOne(() => Subject)
  subject!: Subject;

  @OneToMany(() => Activity, (activity) => activity.module)
  activities!: Activity[];

  // @OneToMany
  // content

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
