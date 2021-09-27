import { getRepository } from "typeorm";
import { Characteristic } from "../../entity/Characteristic";

export default async (characteristics: any) => {
  const characteristicRepository = getRepository(Characteristic);

  const charArray = [];

  for (let i = 0; i < characteristics.length; i++) {
    let instance = await characteristicRepository.findOne({
      name: characteristics[i].name,
    });
    if (!instance) {
      instance = new Characteristic(characteristics[i].name);
    }
    charArray.push(instance);
  }

  return charArray;
};
