import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import passport from "passport";

const app = express();
app.use(express.json());
app.use(passport.initialize());
const PORT = 3000;

import { initializerRoutes } from "./api/routers";

initializerRoutes(app);

import config from "./config/database";

createConnection(config)
  .then((_connection) => {
    app.listen(PORT, () => {
      console.log(`Running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    process.exit(1);
  });
