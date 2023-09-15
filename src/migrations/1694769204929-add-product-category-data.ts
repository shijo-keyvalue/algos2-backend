import {MigrationInterface, QueryRunner} from "typeorm";

export class addProductCategoryData1694769204929 implements MigrationInterface {
    name = 'addProductCategoryData1694769204929'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO public.category
        (id, "name", description, created_at, updated_at, deleted_at)
        VALUES('35f503d0-4311-4d12-8c61-82a0f20568e5'::uuid, 'Kits', 'Description 1', '2023-09-15 12:22:14.021', '2023-09-15 12:22:14.021', NULL);`)
        
        await queryRunner.query(`INSERT INTO public.category
        (id, "name", description, created_at, updated_at, deleted_at)
        VALUES('c19b1d74-5384-44c2-8ce0-5d7ef89f14b9'::uuid, 'Seeds', 'Description 2', '2023-09-15 12:22:14.021', '2023-09-15 12:22:14.021', NULL);`)

        await queryRunner.query(`INSERT INTO public.category
        (id, "name", description, created_at, updated_at, deleted_at)
        VALUES('f36d9247-9c5a-4b4f-bb10-9e4a21e02c03'::uuid, 'Accessories', 'Description 3', '2023-09-15 12:22:14.021', '2023-09-15 12:22:14.021', NULL);`)

        await queryRunner.query(`INSERT INTO public.category
        (id, "name", description, created_at, updated_at, deleted_at)
        VALUES('e6aaf181-f4ba-46f5-a15d-f5132e88baaa'::uuid, 'Growlights', 'Description 4', '2023-09-15 15:09:22.875', '2023-09-15 15:09:22.875', NULL);`)

        await queryRunner.query(`INSERT INTO public.category
        (id, "name", description, created_at, updated_at, deleted_at)
        VALUES('815a75bb-ca28-4ddc-a58f-de37f324d471'::uuid, 'Grow bags', 'Description 5', '2023-09-15 15:09:42.651', '2023-09-15 15:09:42.651', NULL);`)

        await queryRunner.query(`INSERT INTO public.category
        (id, "name", description, created_at, updated_at, deleted_at)
        VALUES('870e1bee-d84f-4173-b200-2ca24a03d390'::uuid, 'Nutrients', 'Description 6', '2023-09-15 15:10:05.418', '2023-09-15 15:10:05.418', NULL);`)

        await queryRunner.query(`INSERT INTO public.category
        (id, "name", description, created_at, updated_at, deleted_at)
        VALUES('9f75c3d6-d426-4063-ab51-bacb1b90ddf0'::uuid, 'Tools', 'Description 7', '2023-09-15 15:10:17.388', '2023-09-15 15:10:17.388', NULL);`)

        await queryRunner.query(
            `INSERT INTO public.product
            (id, "name", description, image, price, category_id, "type", created_at, updated_at, deleted_at, "categoryId")
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
            [
              '2d5f602f-52fa-4df5-b7d8-43d0e2088c70',
              'Product 1',
              'Description 1',
              'image1.jpg',
              20,
              '35f503d0-4311-4d12-8c61-82a0f20568e5',
              'marketplace-product',
              '2023-09-15 12:11:26.002',
              '2023-09-15 12:11:26.002',
              null,
              null,
            ]
          );
      
          await queryRunner.query(
            `INSERT INTO public.product
            (id, "name", description, image, price, category_id, "type", created_at, updated_at, deleted_at, "categoryId")
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
            [
              '112c3ed1-ba2e-419b-ae71-341b68223079',
              'Product 2',
              'Description 2',
              'image2.jpg',
              30,
              'c19b1d74-5384-44c2-8ce0-5d7ef89f14b9',
              'marketplace-product',
              '2023-09-15 12:11:26.002',
              '2023-09-15 12:11:26.002',
              null,
              null,
            ]
          );
      
          await queryRunner.query(
            `INSERT INTO public.product
            (id, "name", description, image, price, category_id, "type", created_at, updated_at, deleted_at, "categoryId")
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
            [
              '4820e4cc-5c33-443a-8e98-71d22771b40b',
              'Product 3',
              'Description 3',
              'image3.jpg',
              40,
              '35f503d0-4311-4d12-8c61-82a0f20568e5',
              'marketplace-product',
              '2023-09-15 12:11:26.002',
              '2023-09-15 12:11:26.002',
              null,
              null,
            ]
          );
      
          await queryRunner.query(
            `INSERT INTO public.product
            (id, "name", description, image, price, category_id, "type", created_at, updated_at, deleted_at, "categoryId")
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
            [
              'cd288e93-f11e-4074-8374-337452efc3d7',
              'Product 4',
              'Description 4',
              'image4.jpg',
              50,
              '35f503d0-4311-4d12-8c61-82a0f20568e5',
              'marketplace-product',
              '2023-09-15 12:11:26.002',
              '2023-09-15 12:11:26.002',
              null,
              null,
            ]
          );
      
          await queryRunner.query(
            `INSERT INTO public.product
            (id, "name", description, image, price, category_id, "type", created_at, updated_at, deleted_at, "categoryId")
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
            [
              '1b9f01c7-f8d0-4053-b0f0-0da09923ac70',
              'Product 5',
              'Description 5',
              'image5.jpg',
              60,
              '35f503d0-4311-4d12-8c61-82a0f20568e5',
              'marketplace-product',
              '2023-09-15 12:11:26.002',
              '2023-09-15 12:11:26.002',
              null,
              null,
            ]
          );
      
          await queryRunner.query(
            `INSERT INTO public.product
            (id, "name", description, image, price, category_id, "type", created_at, updated_at, deleted_at, "categoryId")
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
            [
              'cf1fe5b5-710e-4016-96be-4a59276086a1',
              'Product 6',
              'Description 6',
              'image6.jpg',
              70,
              'c19b1d74-5384-44c2-8ce0-5d7ef89f14b9',
              'marketplace-product',
              '2023-09-15 12:11:26.002',
              '2023-09-15 12:11:26.002',
              null,
              null,
            ]
          );
      
          await queryRunner.query(
            `INSERT INTO public.product
            (id, "name", description, image, price, category_id, "type", created_at, updated_at, deleted_at, "categoryId")
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
            [
              '8702efe7-6f15-4edf-b4a0-72cee449f6d6',
              'Product 7',
              'Description 7',
              'image7.jpg',
              80,
              'c19b1d74-5384-44c2-8ce0-5d7ef89f14b9',
              'marketplace-product',
              '2023-09-15 12:11:26.002',
              '2023-09-15 12:11:26.002',
              null,
              null,
            ]
          );
      
          await queryRunner.query(
            `INSERT INTO public.product
            (id, "name", description, image, price, category_id, "type", created_at, updated_at, deleted_at, "categoryId")
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
            [
              '375e4714-10cf-4031-8bcf-f8bc43eef12e',
              'Product 8',
              'Description 8',
              'image8.jpg',
              90,
              'c19b1d74-5384-44c2-8ce0-5d7ef89f14b9',
              'marketplace-product',
              '2023-09-15 12:11:26.002',
              '2023-09-15 12:11:26.002',
              null,
              null,
            ]
          );
      
          await queryRunner.query(
            `INSERT INTO public.product
            (id, "name", description, image, price, category_id, "type", created_at, updated_at, deleted_at, "categoryId")
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
            [
              '9b6a2264-b2c3-40ee-aed1-67fa38305452',
              'Product 9',
              'Description 9',
              'image9.jpg',
              100,
              'f36d9247-9c5a-4b4f-bb10-9e4a21e02c03',
              'marketplace-product',
              '2023-09-15 12:11:26.002',
              '2023-09-15 12:11:26.002',
              null,
              null,
            ]
          );
      
          await queryRunner.query(
            `INSERT INTO public.product
            (id, "name", description, image, price, category_id, "type", created_at, updated_at, deleted_at, "categoryId")
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
            [
              '79f796c7-c897-4912-a75f-81c3ab28ced8',
              'Product 10',
              'Description 10',
              'image10.jpg',
              110,
              'f36d9247-9c5a-4b4f-bb10-9e4a21e02c03',
              'marketplace-product',
              '2023-09-15 12:11:26.002',
              '2023-09-15 12:11:26.002',
              null,
              null,
            ]
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
