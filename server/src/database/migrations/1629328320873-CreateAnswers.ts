import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAnswers1629328320873 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "answers",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "question_id",
            type: "uuid",
          },
          {
            name: "text",
            type: "varchar",
          },
          {
            name: "isCorrect",
            type: "boolean",
          },
        ],
        foreignKeys: [
          {
            name: "FKAnswerQuestion",
            referencedTableName: "questions",
            referencedColumnNames: ["id"],
            columnNames: ["question_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("answers");
  }
}
