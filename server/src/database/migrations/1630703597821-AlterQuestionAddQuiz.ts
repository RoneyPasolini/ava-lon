import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AlterQuestionAddQuiz1630703597821 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "questions",
      new TableColumn({
        name: "quiz",
        type: "uuid",
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      "questions",
      new TableForeignKey({
        name: "FKQuestionQuiz",
        referencedTableName: "quizzes",
        referencedColumnNames: ["id"],
        columnNames: ["quiz"],
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const questionsTable = await queryRunner.getTable("questions");
    const fKQuestionQuiz = questionsTable!.foreignKeys.find(
      (fk) => fk.columnNames.indexOf("quiz") !== -1
    );
    await queryRunner.dropForeignKey("questions", fKQuestionQuiz!);
    await queryRunner.dropColumn("questions", "quiz");
  }
}
