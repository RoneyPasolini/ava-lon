import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSubjects1629931261360 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "subjects",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "title",
            type: "varchar",
          },
          {
            name: "teacher_id",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "students",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "modules",
            type: "uuid",
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: "FKSubjectTeacher",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["teacher_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKSubjectStudents",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["students"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKSubjectModules",
            referencedTableName: "modules",
            referencedColumnNames: ["id"],
            columnNames: ["modules"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("subjects");
  }
}
