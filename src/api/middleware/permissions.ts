import { Request, Response, NextFunction } from "express";
import { UserPayload } from "../../types/typeUserPayload";

export const createChangePermission = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { is_superuser } = req.user as UserPayload;

  if (is_superuser) {
    next();
  } else {
    res.status(403).send({ message: "Unauthorized action!" });
  }
};
