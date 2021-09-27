import { AnimalType } from "../../types/typeAnimal";

export default (animalArray: Array<any> | AnimalType) => {
  if (Array.isArray(animalArray)) {
    let animalNewArray = [];
    for (let i = 0; i < animalArray.length; i++) {
      let group = {
        id: animalArray[i].group.id,
        name: animalArray[i].group.name,
        scientific_name: animalArray[i].group.scientific_name,
      };

      let newCharacteristics = [];
      for (let j = 0; j < animalArray[i].characteristics.length; j++) {
        animalArray[i].characteristics[j] = {
          id: animalArray[i].characteristics[j].id,
          name: animalArray[i].characteristics[j].name,
        };

        newCharacteristics.push(animalArray[i].characteristics[j]);
      }

      animalArray[i] = {
        id: animalArray[i].id,
        name: animalArray[i].name,
        age: animalArray[i].age,
        weight: animalArray[i].weight,
        sex: animalArray[i].sex,
        group: group,
        characteristics: newCharacteristics,
      };

      animalNewArray.push(animalArray[i]);
    }

    return animalNewArray;
  } else {
    const group = {
      id: animalArray.group.id,
      name: animalArray.group.name,
      scientific_name: animalArray.group.scientific_name,
    };

    let newCharacteristics = [];
    for (let i = 0; i < animalArray.characteristics.length; i++) {
      animalArray.characteristics[i] = {
        id: animalArray.characteristics[i].id,
        name: animalArray.characteristics[i].name,
      };
      newCharacteristics.push(animalArray.characteristics[i]);
    }

    animalArray = {
      id: animalArray.id,
      name: animalArray.name,
      age: animalArray.age,
      weight: animalArray.weight,
      sex: animalArray.sex,
      group: group,
      characteristics: newCharacteristics,
    };

    return animalArray;
  }
};
