import { Express } from "express";
import { initializerLoginRoute } from "./auth";
import { initializerUserRoutes } from "./user";

const initializerRoutes = (app: Express) => {
  initializerUserRoutes(app);
  initializerLoginRoute(app);
};

export { initializerRoutes };
