import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../entity/User";

export const createUser = async (req: Request, res: Response) => {
  const userRepository = getRepository(User);

  const { username, password, is_superuser } = req.body;
  const user = new User(username, password, is_superuser);

  const createdUser = await userRepository.save(user);

  const responseUser = { id: createdUser.id, username: createdUser.username };

  res.status(201).send(responseUser);
};
