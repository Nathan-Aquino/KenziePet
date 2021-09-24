import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  type: "sqlite",
  database: `${__dirname}/../../database.sqlite`,
  entities: [`${__dirname}/../entity/*.ts`],
  synchronize: false,
  migrations: [`${__dirname}/../migration/*.js`],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
};

export default config;
