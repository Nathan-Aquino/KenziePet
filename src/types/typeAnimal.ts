export interface GroupType {
  id: number;
  name: string;
  scientific_name: string;
}

export interface CharacteristicType {
  id: number;
  name: string;
}

export interface AnimalType {
  id: number;
  name: string;
  age: number;
  weight: number;
  sex: string;
  group: GroupType;
  characteristics: Array<CharacteristicType>;
}
