import {MigrationInterface, QueryRunner} from "typeorm";

export class addPostData1694802798289 implements MigrationInterface {
    name = 'addPostData1694802798289'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `-- Insert sample users with specific userIds
            INSERT INTO "user" ("id", "email", "name", "avatar", "phone_number", "password", "status", "subscription_plan_id", "type", "created_at", "updated_at", "deleted_at")
            VALUES
                ('11111111-1111-1111-1111-111111111111', 'user1@example.com', 'User 1', 'avatar1.jpg', '1234567890', 'password1', 'verification-pending', NULL, 'consumer', NOW(), NOW(), NULL),
                ('22222222-2222-2222-2222-222222222222', 'user2@example.com', 'User 2', 'avatar2.jpg', '9876543210', 'password2', 'verification-pending', NULL, 'consumer', NOW(), NOW(), NULL),
                ('33333333-3333-3333-3333-333333333333', 'user3@example.com', 'User 3', 'avatar3.jpg', '1112223333', 'password3', 'verification-pending', NULL, 'consumer', NOW(), NOW(), NULL),
                ('44444444-4444-4444-4444-444444444444', 'user4@example.com', 'User 4', 'avatar4.jpg', '4445556666', 'password4', 'verification-pending', NULL, 'consumer', NOW(), NOW(), NULL),
                ('55555555-5555-5555-5555-555555555555', 'user5@example.com', 'User 5', 'avatar5.jpg', '7778889999', 'password5', 'verification-pending', NULL, 'consumer', NOW(), NOW(), NULL);
            
            -- Insert sample posts
            INSERT INTO "post" ("id", "content", "images", "is_post", "user_id", "like_count", "created_at", "updated_at")
            VALUES
                ('11111111-1111-1111-1111-111111111112', 'Just started my hydroponic garden! Excited', '["https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRZQW7M8o_TZyqp_2s_GHyZdRExyn8_9SHvJ6ZWPLbO3C_Q8hqW"]', TRUE, '11111111-1111-1111-1111-111111111111', 5, NOW(), NOW()),
                ('22222222-2222-2222-2222-222222222223', 'Harvested some fresh lettuce today. Its so satisfying!', '["https://m.media-amazon.com/images/I/31pT6-VvwbL.jpg"]', TRUE, '22222222-2222-2222-2222-222222222222', 8, NOW(), NOW()),
                ('33333333-3333-3333-3333-333333333334', 'My hydroponic tomatoes are growing like crazy! 🍅', '["https://cdn.shopify.com/s/files/1/0597/9376/8608/files/hydroponic_cherry_tomatoes_system_1024x1024.jpg?v=1685696663"]', TRUE, '11111111-1111-1111-1111-111111111111', 12, NOW(), NOW()),
                ('44444444-4444-4444-4444-444444444445', 'Experimenting with different nutrient solutions. Any recommendations?', NULL, TRUE, '33333333-3333-3333-3333-333333333333', 6, NOW(), NOW()),
                ('55555555-5555-5555-5555-555555555556', 'My hydroponic basil is thriving! 🌿', '["https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTFCNztVfGQN8lSbuNeKSAAtDLxs9ED1V5RLQKguni0huV-PvS5"]', TRUE, '22222222-2222-2222-2222-222222222223', 10, NOW(), NOW()),
                ('66666666-6666-6666-6666-666666666667', 'Visited a hydroponic farm today. So impressed with their setup!', '["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxoa5BdPG5d6qgAhJEGMzoB4Yt4kMydAD1H3OxvXftFcoACa1a"]', TRUE, '11111111-1111-1111-1111-111111111111', 7, NOW(), NOW()),
                ('77777777-7777-7777-7777-777777777778', 'How do you deal with pests in hydroponic gardening?', NULL, TRUE, '33333333-3333-3333-3333-333333333333', 4, NOW(), NOW()),
                ('88888888-8888-8888-8888-888888888889', 'My first hydroponic cucumber harvest! 🥒', '["https://t3.gstatic.com/images?q=tbn:ANd9GcTNu9p_6UV5WJFZ4GWD5Q2sLpDzntu2x3fbAMPa3oHNnkq8ccKt"]', TRUE, '11111111-1111-1111-1111-111111111111', 9, NOW(), NOW()),
                ('99999999-9999-9999-9999-999999999990', 'Trying out vertical hydroponic farming. Its a space-saver!', '["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJsfZo-u7XL7PKC-DQtode-Y2iks4yU2v9z5wVZr44E1-EYMg"]', TRUE, '22222222-2222-2222-2222-222222222222', 6, NOW(), NOW()),
                ('00000000-0000-0000-0000-000000000001', 'Growing hydroponic strawberries for the first time. Any tips?', '["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBTRVtdNmD9pWPEWTGindkA0HfqbBa5Bh5VLS3lYSdI532Xua4"]', TRUE, '33333333-3333-3333-3333-333333333333', 5, NOW(), NOW());
            
            -- Insert comments for each post
            INSERT INTO "post" ("id", "content", "images", "is_post", "user_id", "like_count", "created_at", "updated_at", "parent_id")
            VALUES
                ('11111111-1111-1111-1111-111111111113', 'Great start! Keep us updated on your garden progress', NULL, FALSE, '22222222-2222-2222-2222-222222222222', NULL, NOW(), NOW(), '11111111-1111-1111-1111-111111111112'),
                ('22222222-2222-2222-2222-222222222224', 'I love fresh lettuce from the garden. Enjoy your harvest', NULL, FALSE, '11111111-1111-1111-1111-111111111111', NULL, NOW(), NOW(), '22222222-2222-2222-2222-222222222223'),
                ('33333333-3333-3333-3333-333333333335', 'Your tomatoes look amazing! Whats your secret', NULL, FALSE, '22222222-2222-2222-2222-222222222223', NULL, NOW(), NOW(), '33333333-3333-3333-3333-333333333334'),
                ('44444444-4444-4444-4444-444444444446', 'Keep experimenting! Youll discover some great solutions', NULL, FALSE, '33333333-3333-3333-3333-333333333333', NULL, NOW(), NOW(), '44444444-4444-4444-4444-444444444445'),
                ('55555555-5555-5555-5555-555555555557', 'Basil is one of my favorites too! Looks lush', NULL, FALSE, '11111111-1111-1111-1111-111111111111', NULL, NOW(), NOW(), '55555555-5555-5555-5555-555555555556'),
                ('66666666-6666-6666-6666-666666666668', 'Id love to visit that farm. Share more pictures!', NULL, FALSE, '22222222-2222-2222-2222-222222222222', NULL, NOW(), NOW(), '66666666-6666-6666-6666-666666666667'),
                ('77777777-7777-7777-7777-777777777779', 'Pests can be tricky. Try natural repellents!', NULL, FALSE, '11111111-1111-1111-1111-111111111111', NULL, NOW(), NOW(), '77777777-7777-7777-7777-777777777778'),
                ('88888888-8888-8888-8888-888888888890', 'Congratulations on your cucumber harvest!', NULL, FALSE, '33333333-3333-3333-3333-333333333333', NULL, NOW(), NOW(), '88888888-8888-8888-8888-888888888889'),
                ('99999999-9999-9999-9999-999999999991', 'Vertical farming is fascinating. Tell us more!', NULL, FALSE, '22222222-2222-2222-2222-222222222223', NULL, NOW(), NOW(), '99999999-9999-9999-9999-999999999990'),
                ('00000000-0000-0000-0000-000000000002', 'I have always wanted to grow strawberries. Any challenges?', NULL, FALSE, '33333333-3333-3333-3333-333333333333', NULL, NOW(), NOW(), '00000000-0000-0000-0000-000000000001'),
                ('a1a1a1a1-a1a1-a1a1-a1a1-a1a1a1a1a1a2', 'Your hydroponic garden looks fantastic! Keep it up!', NULL, FALSE, '11111111-1111-1111-1111-111111111111', NULL, NOW(), NOW(), '11111111-1111-1111-1111-111111111112'),
                ('b2b2b2b2-b2b2-b2b2-b2b2-b2b2b2b2b2b2', 'Fresh lettuce is the best! Enjoy your delicious salad!', NULL, FALSE, '22222222-2222-2222-2222-222222222222', NULL, NOW(), NOW(), '22222222-2222-2222-2222-222222222223'),
                ('c3c3c3c3-c3c3-c3c3-c3c3-c3c3c3c3c3c3', 'Your tomatoes are thriving! What is your secret to success?', NULL, FALSE, '11111111-1111-1111-1111-111111111111', NULL, NOW(), NOW(), '33333333-3333-3333-3333-333333333334'),
                ('d4d4d4d4-d4d4-d4d4-d4d4-d4d4d4d4d4d4', 'Keep up the great work with your experiments!', NULL, FALSE, '33333333-3333-3333-3333-333333333333', NULL, NOW(), NOW(), '44444444-4444-4444-4444-444444444445'),
                ('e5e5e5e5-e5e5-e5e5-e5e5-e5e5e5e5e5e5', 'Your basil looks healthy and vibrant! Wonderful!', NULL, FALSE, '22222222-2222-2222-2222-222222222223', NULL, NOW(), NOW(), '55555555-5555-5555-5555-555555555556'),
                ('f6f6f6f6-f6f6-f6f6-f6f6-f6f6f6f6f6f6', 'I would love to see more photos of the farm you visited!', NULL, FALSE, '11111111-1111-1111-1111-111111111111', NULL, NOW(), NOW(), '66666666-6666-6666-6666-666666666667'),
                ('12121212-1212-1212-1212-121212121212', 'Your cucumber harvest is impressive! Great job!', NULL, FALSE, '11111111-1111-1111-1111-111111111111', NULL, NOW(), NOW(), '88888888-8888-8888-8888-888888888889'),
                ('39393939-3939-3939-3939-393939393939', 'Vertical hydroponic farming is intriguing. Tell us more!', NULL, FALSE, '22222222-2222-2222-2222-222222222222', NULL, NOW(), NOW(), '99999999-9999-9999-9999-999999999990'),
                ('30303030-3030-3030-3030-303030303030', 'Strawberries are delicious! Any challenges you have faced?', NULL, FALSE, '33333333-3333-3333-3333-333333333333', NULL, NOW(), NOW(), '00000000-0000-0000-0000-000000000001');
            `
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
