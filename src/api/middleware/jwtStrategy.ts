import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import { User } from "../../entity/User";
import { getRepository } from "typeorm";

export const passportStrategy = () => {
  const options: StrategyOptions = {
    secretOrKey: "xpto",
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  };

  const verify = async (jwt_payload: any, done: Function, err: any) => {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(jwt_payload.id);

    if (user) {
      const newUser = {
        id: user.id,
        username: user.username,
        is_superuser: user.is_superuser,
      };

      return done(null, newUser);
    } else {
      return done(err, false);
    }
  };

  return new Strategy(options, verify);
};
