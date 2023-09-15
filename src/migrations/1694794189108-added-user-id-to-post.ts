import {MigrationInterface, QueryRunner} from "typeorm";

export class addedUserIdToPost1694794189108 implements MigrationInterface {
    name = 'addedUserIdToPost1694794189108'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ADD "user_id" uuid NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "user_id"`);
    }

}
