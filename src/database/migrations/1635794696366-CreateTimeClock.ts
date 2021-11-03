import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTimeClock1635794696366 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "timeClocks",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    }, 
                    {
                        name: "userId",
                        type: "uuid"
                    },
                    {
                        name: "latitude",
                        type: "varchar"
                    },
                    {
                        name: "longitude",
                        type: "varchar"
                    },
                    {
                        name: "altitude",
                        type: "varchar"
                    },
                    {
                        name: "breakType",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamps",
                        default: "now()"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("timeClocks");
    }

}
