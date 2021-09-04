import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateGrades1629845511699 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "grades",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "max_value",
            type: "float",
          },
          {
            name: "value_earned",
            type: "float",
            isNullable: true,
          },
          {
            name: "activity_id",
            type: "uuid",
          },
          {
            name: "student_id",
            type: "uuid",
          },
        ],
        foreignKeys: [
          {
            name: "FKGradeActivity",
            referencedTableName: "activities",
            referencedColumnNames: ["id"],
            columnNames: ["activity_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKGradeStudent",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["student_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("grades");
  }
}
