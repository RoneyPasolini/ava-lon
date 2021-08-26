import { Column, Entity, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { Subject } from "./Subject";
@Entity("users")
export class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  isTeacher: boolean;

  @Column()
  isAdmin: boolean;

  @OneToMany(() => Subject, (subject) => subject.teacher)
  subjectsTeached!: Subject[];

  @ManyToMany(() => Subject, (subject) => subject.students)
  subjectsStudied!: Subject[];

  constructor(
    email: string,
    name: string,
    password: string,
    isTeacher = false,
    isAdmin = false
  ) {
    this.email = email;
    this.name = name;
    this.password = password;
    this.isTeacher = isTeacher;
    this.isAdmin = isAdmin;
    this.id = uuidv4();
  }
}
