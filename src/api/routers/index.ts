import { Express } from "express";
import { initializerAnimalRoutes } from "./animal";
import { initializerLoginRoute } from "./auth";
import { initializerUserRoutes } from "./user";

const initializerRoutes = (app: Express) => {
  initializerUserRoutes(app);
  initializerLoginRoute(app);
  initializerAnimalRoutes(app);
};

export { initializerRoutes };
