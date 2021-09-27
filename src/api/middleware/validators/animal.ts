import { body } from "express-validator";

export const animalValidator = () => {
  return [
    body("name")
      .exists()
      .withMessage("Missing field name")
      .if(body("name").exists())
      .isString()
      .withMessage("Invalid value!"),
    body("age")
      .exists()
      .withMessage("Missing field age")
      .if(body("age").exists())
      .isNumeric()
      .withMessage("Invalid value!"),
    body("weight")
      .exists()
      .withMessage("Missing field weight")
      .if(body("weight").exists())
      .isNumeric()
      .withMessage("Invalid value!"),
    body("sex")
      .exists()
      .withMessage("Missing field sex")
      .if(body("sex").exists())
      .isString()
      .withMessage("Invalid value!"),
    body("group")
      .exists()
      .withMessage("Missing field group")
      .if(body("group").exists())
      .isObject()
      .withMessage("Invalid value!"),
    body("characteristics")
      .exists()
      .withMessage("Missing field characteristics")
      .if(body("characteristics").exists())
      .isArray()
      .withMessage("Invalid value!"),
  ];
};
