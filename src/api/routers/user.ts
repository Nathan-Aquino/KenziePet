import { Express, Router } from "express";
import { createUser } from "../controllers/user";

const initializerUserRoutes = (app: Express) => {
  const route = Router();

  route.post("/user", createUser);

  app.use("/api", route);
};

export { initializerUserRoutes };
