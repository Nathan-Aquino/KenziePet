const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class GroupModel1632348006418 {
    name = 'GroupModel1632348006418'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "group" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "scientific_name" varchar NOT NULL)`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "group"`);
    }
}
