import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateQuizzes1630367019104 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "quizzes",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "activity",
            type: "uuid",
          },
          {
            name: "questions",
            type: "uuid",
          },
        ],
        foreignKeys: [
          {
            name: "FKQuizActivity",
            referencedTableName: "activities",
            referencedColumnNames: ["id"],
            columnNames: ["activity"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKQuizQuestions",
            referencedTableName: "questions",
            referencedColumnNames: ["id"],
            columnNames: ["questions"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("quizzes");
  }
}
