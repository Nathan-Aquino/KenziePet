import { Express, Router } from "express";
import passport from "passport";
import { create } from "../controllers/animal";
import { passportStrategy } from "../middleware/jwtStrategy";
import { createChangePermission } from "../middleware/permissions";
import { validate } from "../middleware/validators";
import { animalValidator } from "../middleware/validators/animal";

export const initializerAnimalRoutes = (app: Express) => {
  passport.use(passportStrategy());

  const route = Router();
  route.use(passport.authenticate("jwt", { session: false }));

  //rotas
  route.post("/", animalValidator(), validate, createChangePermission, create);

  app.use("/api/animal", route);
};
