import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateQuestions1629328299427 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "questions",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "text",
            type: "varchar",
          },
          {
            name: "answers",
            type: "uuid",
            isArray: true,
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: "FKQuestionAnswers",
            referencedTableName: "answers",
            referencedColumnNames: ["id"],
            columnNames: ["answers"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("questions");
  }
}
