import {MigrationInterface, QueryRunner} from "typeorm";

export class removeContentLengthLimit1694829079459 implements MigrationInterface {
    name = 'removeContentLengthLimit1694829079459'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ALTER COLUMN "content" TYPE VARCHAR;`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
