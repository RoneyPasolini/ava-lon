import { Column, Entity, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Subject } from "./Subject";
@Entity("users")
export class User {
  @PrimaryColumn()
  readonly id?: string;

  @Column()
  email!: string;

  @Column()
  name!: string;

  @Column()
  password!: string;

  @Column()
  isTeacher!: boolean;

  @Column()
  isAdmin!: boolean;

  @OneToMany(() => Subject, (subject) => subject.teacher)
  subjectsTeached!: Subject[];

  @ManyToMany(() => Subject, (subject) => subject.students)
  subjectsStudied!: Subject[];

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
