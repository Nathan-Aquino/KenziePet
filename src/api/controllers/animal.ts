import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Animal } from "../../entity/Animal";
import { Group } from "../../entity/Group";
import { Characteristic } from "../../entity/Characteristic";
import characteristicsCreator from "../services/characteristicsCreator";

export const create = async (req: Request, res: Response) => {
  const animalRepository = getRepository(Animal);
  const groupRepository = getRepository(Group);
  const characteristicRepository = getRepository(Characteristic);

  const { name, age, weight, sex, group, characteristics } = req.body;

  const nameG = group.name;
  const scientific_name = group.scientific_name;

  let groupInstance = await groupRepository.findOne({ name: nameG });

  if (!groupInstance) {
    groupInstance = new Group(nameG, scientific_name);
    groupInstance = await groupRepository.save(groupInstance);
    groupInstance = {
      id: groupInstance.id,
      name: groupInstance.name,
      scientific_name: groupInstance.scientific_name,
    };
  }

  let characteristicArray = await characteristicsCreator(characteristics);
  characteristicArray = await characteristicRepository.save(
    characteristicArray
  );
  characteristicArray = characteristicArray.map((element: Characteristic) => {
    return { id: element.id, name: element.name };
  });

  const animal = new Animal(name, age, weight, sex);

  animal.group = groupInstance;
  animal.characteristics = characteristicArray;

  let animalResponse = await animalRepository.save(animal);
  animalResponse = {
    id: animalResponse.id,
    name: animalResponse.name,
    age: animalResponse.age,
    weight: animalResponse.weight,
    sex: animalResponse.sex,
    group: animalResponse.group,
    characteristics: animalResponse.characteristics,
  };

  res.status(201).send(animalResponse);
};
