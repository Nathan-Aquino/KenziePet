import { Express, Router } from "express";
import { passportStrategy } from "../middleware/jwtStrategy";
import passport from "passport";
//controllers

export const initializerAnimalRoutes = (app: Express) => {
  passportStrategy(passport);
  const route = Router();
  route.use(passport.authenticate("jwt", { session: false }));

  //rotas

  app.use("/api/animal", route);
};
