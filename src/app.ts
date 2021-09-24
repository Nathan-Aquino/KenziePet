import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";

const app = express();
const PORT = 3000;

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
