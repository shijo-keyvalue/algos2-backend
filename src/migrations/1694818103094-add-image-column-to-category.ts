import {MigrationInterface, QueryRunner} from "typeorm";

export class addImageColumnToCategory1694818103094 implements MigrationInterface {
    name = 'addImageColumnToCategory1694818103094'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" ADD "image" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "image"`);
    }

}
