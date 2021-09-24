import { Express } from "express";
import { initializerUserRoutes } from "./user";

const initializerRoutes = (app: Express) => {
  initializerUserRoutes(app);
};

export { initializerRoutes };
