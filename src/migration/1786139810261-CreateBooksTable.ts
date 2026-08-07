import { Table, type MigrationInterface, type QueryRunner } from "typeorm";

export class CreateBooksTable1786139810261 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create table "books"
         await queryRunner.createTable(new Table({
            name: "books",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "isbn",
                    type: "varchar",
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "pages_amount",
                    type: "int"
                },
                {
                    name: "author",
                    type: "varchar"
                },
                {
                    name: "year_of_realese",
                    type: "int"
                },
            ]
         }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("books");
    }

}
