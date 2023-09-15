import {MigrationInterface, QueryRunner} from "typeorm";

export class gardenAndPlantEntities1694768308297 implements MigrationInterface {
    name = 'gardenAndPlantEntities1694768308297'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "garden_site" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "user_id" uuid, "product_id" uuid, "temperature" integer, "water_level" integer, "humidity" integer, "ph_level" numeric, "light_level" integer, "nutrient_level" character varying DEFAULT 'medium', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_ba4494eaa83610e9bdb29af6429" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "garden_site_plant" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "garden_site_id" uuid, "plant_id" uuid, "planted_at" TIMESTAMP NOT NULL DEFAULT now(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_01ac617d2328b611f3bcc3f0814" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "plant" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "image" character varying, "description" character varying NOT NULL, "days_to_harvest" integer, "optimum_temp" integer DEFAULT '70', "optimum_ph_level" numeric DEFAULT '6.5', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_97e1eb0d045aadea59401ece5ba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_ff0c0301a95e517153df97f6812" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "post_like" ADD CONSTRAINT "FK_a7ec6ac3dc7a05a9648c418f1ad" FOREIGN KEY ("post_id") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "post_like" ADD CONSTRAINT "FK_c635b15915984c8cdb520a1fef3" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post_like" DROP CONSTRAINT "FK_c635b15915984c8cdb520a1fef3"`);
        await queryRunner.query(`ALTER TABLE "post_like" DROP CONSTRAINT "FK_a7ec6ac3dc7a05a9648c418f1ad"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_ff0c0301a95e517153df97f6812"`);
        await queryRunner.query(`DROP TABLE "plant"`);
        await queryRunner.query(`DROP TABLE "garden_site_plant"`);
        await queryRunner.query(`DROP TABLE "garden_site"`);
    }

}
