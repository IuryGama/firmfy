import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCompliments1635523656567 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "compliments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "userSender",
                        type: "uuid"
                    },
                    {
                        name: "userReciver",
                        type: "uuid"
                    },
                    {
                        name: "tagId",
                        type: "uuid"
                    },
                    {
                        name: "message",
                        type: "varchar"
                    },
                    {
                        name: "active",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "created_at",
                        type: "timestamps",
                        default: "now()"
                    },
                    {
                        name: "deleted_at",
                        type: "timestamps",
                        isNullable: true
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUserSenderCompliments",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["userSender"],
                        onDelete: "CASCADE",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKUserReciverCompliments",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["userReciver"],
                        onDelete: "CASCADE",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKTagCompliment",
                        referencedTableName: "tags",
                        referencedColumnNames: ["id"],
                        columnNames: ["tagId"],
                        onDelete: "CASCADE",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments");
    }

}
