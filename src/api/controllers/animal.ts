import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Animal } from "../../entity/Animal";
import { Group } from "../../entity/Group";
import { Characteristic } from "../../entity/Characteristic";
import characteristicsCreator from "../services/characteristicsCreator";
import organizeAnimalResponse from "../services/organizeAnimalResponse";
import {
  AnimalType,
  CharacteristicType,
  GroupType,
} from "../../types/typeAnimal";

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

export const list = async (req: Request, res: Response) => {
  const animalRepository = getRepository(Animal);

  let animalsFind = await animalRepository.find({
    relations: ["group", "characteristics"],
  });

  const animalResponse = organizeAnimalResponse(animalsFind);

  res.status(200).send(animalResponse);
};

export const filter = async (req: Request, res: Response) => {
  const animalRepository = getRepository(Animal);

  const id = req.params.animal_id;

  const animal = (await animalRepository.findOne(id, {
    relations: ["group", "characteristics"],
  })) as AnimalType;

  if (!animal) {
    return res.status(404).send();
  }

  const animalResponse = organizeAnimalResponse(animal);

  res.status(200).send(animalResponse);
};

export const updateAnimal = async (req: Request, res: Response) => {
  const animalRepository = getRepository(Animal);
  const groupRepository = getRepository(Group);

  const id = req.params.animal_id;

  let animal = await animalRepository.findOne(id);

  if (!animal) return res.status(404).send();

  let group = await groupRepository.findOne({ name: req.body.group.name });
  if (!group) {
    group = (await groupRepository.save(req.body.group)) as GroupType;
  }

  let characteristics = await characteristicsCreator(req.body.characteristics);

  animal = {
    id: animal.id,
    name: req.body.name,
    age: req.body.age,
    weight: req.body.weight,
    sex: req.body.sex,
    group: group,
    characteristics: characteristics,
  };

  animal = await animalRepository.save(animal);

  const animalResponse = organizeAnimalResponse(animal);

  res.status(200).send(animalResponse);
};

export const deleteAnimal = async (req: Request, res: Response) => {
  const animalRepository = getRepository(Animal);

  const id = req.params.animal_id;

  const animal = await animalRepository.findOne(id);

  if (!animal) return res.status(404).send();

  await animalRepository.delete(id);

  res.status(204).send();
};
