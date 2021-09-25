import { Express, Router } from "express";
import { login } from "../controllers/auth";

export const initializerLoginRoute = (app: Express) => {
  const route = Router();

  route.post("/login", login);

  app.use("/api", route);
};
