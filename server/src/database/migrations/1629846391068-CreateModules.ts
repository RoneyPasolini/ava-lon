import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateModules1629846391068 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "modules",
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
            name: "subject_id",
            type: "uuid",
          },
          {
            name: "activities",
            type: "uuid",
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: "FKModuleSubject",
            referencedTableName: "subjects",
            referencedColumnNames: ["id"],
            columnNames: ["subject_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKModuleActivity",
            referencedTableName: "activities",
            referencedColumnNames: ["id"],
            columnNames: ["activities"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("modules");
  }
}
