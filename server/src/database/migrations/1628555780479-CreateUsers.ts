import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1628555780479 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          { name: "email", type: "varchar" },
          { name: "name", type: "varchar" },
          { name: "password", type: "varchar" },
          { name: "isTeacher", type: "boolean", default: false },
          { name: "isAdmin", type: "boolean", default: false },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
