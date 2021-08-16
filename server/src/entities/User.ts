import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
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
