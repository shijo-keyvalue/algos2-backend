import {MigrationInterface, QueryRunner} from "typeorm";

export class addGardenAndPlantData1694781378011 implements MigrationInterface {
    name = 'addGardenAndPlantData1694781378011'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`

        -- Add User
        INSERT INTO public."user"
(id, email, "name", avatar, phone_number, "password", status, subscription_plan_id, "type", created_at, updated_at, deleted_at)
VALUES('7f6fa2b6-2729-4915-9ca2-2ea889a809f8'::uuid, 'anilkumar@gmail.com', 'Anil Kumar', NULL, '9567703273', 'pswd1234', 'verified', NULL, 'consumer', '2023-09-15 06:03:42.935', '2023-09-15 06:03:42.935', NULL);

        -- Plant 1
INSERT INTO public.plant ("id", "name", image, description, days_to_harvest, optimum_temp, optimum_ph_level)
VALUES ('3d8e86d7-3e3b-4f1a-ae97-0c02e984207d', 'Lettuce', 'lettuce.jpg', 'Leafy green vegetable', 30, 20, 6.0);

-- Plant 2
INSERT INTO public.plant ("id", "name", image, description, days_to_harvest, optimum_temp, optimum_ph_level)
VALUES ('1eabf1a7-7d50-4a09-9315-56ce24419b93', 'Basil', 'basil.jpg', 'Aromatic herb', 40, 25, 6.5);

-- Plant 3
INSERT INTO public.plant ("id", "name", image, description, days_to_harvest, optimum_temp, optimum_ph_level)
VALUES ('8395ec6e-9515-4840-a3f6-4f98179f42de', 'Tomato', 'tomato.jpg', 'Fruit-bearing plant', 60, 22, 6.0);

-- Plant 4
INSERT INTO public.plant ("id", "name", image, description, days_to_harvest, optimum_temp, optimum_ph_level)
VALUES ('a98c3b5e-0e45-4a34-88da-30eb0e8437db', 'Spinach', 'spinach.jpg', 'Leafy green vegetable', 35, 18, 6.2);

-- Plant 5
INSERT INTO public.plant ("id", "name", image, description, days_to_harvest, optimum_temp, optimum_ph_level)
VALUES ('0f7ae2f9-6f0c-4b24-9b12-0e9325c31cf6', 'Cucumber', 'cucumber.jpg', 'Fruit-bearing plant', 50, 24, 5.8);

-- Plant 6
INSERT INTO public.plant ("id", "name", image, description, days_to_harvest, optimum_temp, optimum_ph_level)
VALUES ('689d3cfe-078e-475a-89ef-571b370663e1', 'Kale', 'kale.jpg', 'Leafy green vegetable', 40, 20, 6.2);

-- Plant 7
INSERT INTO public.plant ("id", "name", image, description, days_to_harvest, optimum_temp, optimum_ph_level)
VALUES ('ce5016e9-5b85-437b-a800-122a4f13f9da', 'Peppers', 'peppers.jpg', 'Fruit-bearing plant', 70, 25, 6.5);

-- Plant 8
INSERT INTO public.plant ("id", "name", image, description, days_to_harvest, optimum_temp, optimum_ph_level)
VALUES ('7453cf7f-7592-4a6c-8a6f-e84f23d5f5bf', 'Herbs Mix', 'herbs_mix.jpg', 'Mixed herbs', 45, 22, 6.0);

-- Plant 9
INSERT INTO public.plant ("id", "name", image, description, days_to_harvest, optimum_temp, optimum_ph_level)
VALUES ('ef212c1d-9d4a-4e4a-9f5f-cd59e4a49e2a', 'Strawberries', 'strawberries.jpg', 'Fruit-bearing plant', 90, 18, 5.5);

-- Plant 10
INSERT INTO public.plant ("id", "name", image, description, days_to_harvest, optimum_temp, optimum_ph_level)
VALUES ('3e6b7ca0-0af3-421a-a847-64a8b93ce349', 'Arugula', 'arugula.jpg', 'Leafy green vegetable', 30, 16, 6.0);

-- Garden Site 1
INSERT INTO public.garden_site ("id", "name", user_id, product_id, temperature, water_level, humidity, ph_level, light_level, nutrient_level)
VALUES ('c73c6933-1870-4f46-8f24-9296b0a6af9d', 'Living Room', '7f6fa2b6-2729-4915-9ca2-2ea889a809f8', '2d5f602f-52fa-4df5-b7d8-43d0e2088c70', 25, 60, 50, 6.5, 800, 'medium');

-- Garden Site 2
INSERT INTO public.garden_site ("id", "name", user_id, product_id, temperature, water_level, humidity, ph_level, light_level, nutrient_level)
VALUES ('b2d755c9-cf27-41b7-a6ed-51f52b245f15', 'Balcony', '7f6fa2b6-2729-4915-9ca2-2ea889a809f8', '112c3ed1-ba2e-419b-ae71-341b68223079', 22, 70, 55, 6.2, 900, 'high');

-- Garden site - plant map

INSERT INTO public.garden_site_plant
(id, garden_site_id, plant_id, planted_at, created_at, updated_at)
VALUES(uuid_generate_v4(), 'c73c6933-1870-4f46-8f24-9296b0a6af9d', '3d8e86d7-3e3b-4f1a-ae97-0c02e984207d', now(), now(), now());

INSERT INTO public.garden_site_plant
(id, garden_site_id, plant_id, planted_at, created_at, updated_at)
VALUES(uuid_generate_v4(), 'c73c6933-1870-4f46-8f24-9296b0a6af9d', 'a98c3b5e-0e45-4a34-88da-30eb0e8437db', now(), now(), now());

INSERT INTO public.garden_site_plant
(id, garden_site_id, plant_id, planted_at, created_at, updated_at)
VALUES(uuid_generate_v4(), 'c73c6933-1870-4f46-8f24-9296b0a6af9d', '689d3cfe-078e-475a-89ef-571b370663e1', now(), now(), now());

INSERT INTO public.garden_site_plant
(id, garden_site_id, plant_id, planted_at, created_at, updated_at)
VALUES(uuid_generate_v4(), 'c73c6933-1870-4f46-8f24-9296b0a6af9d', 'ef212c1d-9d4a-4e4a-9f5f-cd59e4a49e2a', now(), now(), now());

INSERT INTO public.garden_site_plant
(id, garden_site_id, plant_id, planted_at, created_at, updated_at)
VALUES(uuid_generate_v4(), 'b2d755c9-cf27-41b7-a6ed-51f52b245f15', '8395ec6e-9515-4840-a3f6-4f98179f42de', now(), now(), now());

INSERT INTO public.garden_site_plant
(id, garden_site_id, plant_id, planted_at, created_at, updated_at)
VALUES(uuid_generate_v4(), 'b2d755c9-cf27-41b7-a6ed-51f52b245f15', 'a98c3b5e-0e45-4a34-88da-30eb0e8437db', now(), now(), now());

INSERT INTO public.garden_site_plant
(id, garden_site_id, plant_id, planted_at, created_at, updated_at)
VALUES(uuid_generate_v4(), 'b2d755c9-cf27-41b7-a6ed-51f52b245f15', '1eabf1a7-7d50-4a09-9315-56ce24419b93', now(), now(), now());

INSERT INTO public.garden_site_plant
(id, garden_site_id, plant_id, planted_at, created_at, updated_at)
VALUES(uuid_generate_v4(), 'b2d755c9-cf27-41b7-a6ed-51f52b245f15', 'ef212c1d-9d4a-4e4a-9f5f-cd59e4a49e2a', now(), now(), now());

        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // delete from plant where id in()
    }

}
