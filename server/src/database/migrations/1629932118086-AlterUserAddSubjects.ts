import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AlterUserAddSubjects1629932118086 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns("users", [
      new TableColumn({
        name: "subjectsTeached",
        type: "uuid",
        isNullable: true,
      }),
      new TableColumn({
        name: "subjectsStudied",
        type: "uuid",
        isNullable: true,
      }),
    ]);

    await queryRunner.createForeignKeys("users", [
      new TableForeignKey({
        name: "FKUserSubjectsTeached",
        referencedTableName: "subjects",
        referencedColumnNames: ["id"],
        columnNames: ["subjectsTeached"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      }),
      new TableForeignKey({
        name: "FKUserSubjectsStudied",
        referencedTableName: "subjects",
        referencedColumnNames: ["id"],
        columnNames: ["subjectsStudied"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const usersTable = await queryRunner.getTable("users");
    const fkSubjectsTeached = usersTable!.foreignKeys.find(
      (fk) => fk.columnNames.indexOf("subjectsTeached") !== -1
    );
    const fkSubjectsStudied = usersTable!.foreignKeys.find(
      (fk) => fk.columnNames.indexOf("subjectsStudied") !== -1
    );
    await queryRunner.dropForeignKeys("users", [
      fkSubjectsTeached!,
      fkSubjectsStudied!,
    ]);
    await queryRunner.dropColumns("users", [
      "subjectsTeached",
      "subjectsStudied",
    ]);
  }
}
