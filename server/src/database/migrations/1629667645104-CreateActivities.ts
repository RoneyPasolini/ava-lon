import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateActivities1629667645104 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "activities",
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
            name: "grade",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "module",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "deadline",
            type: "timestamp",
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: "FKActivityGrade",
            referencedTableName: "grades",
            referencedColumnNames: ["id"],
            columnNames: ["grade"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKActivityModule",
            referencedTableName: "modules",
            referencedColumnNames: ["id"],
            columnNames: ["module"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("activities");
  }
}
