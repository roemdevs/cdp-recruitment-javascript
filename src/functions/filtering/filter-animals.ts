import { Animal } from '../../types/types';

export const filterAnimals = (animals: Animal[], filter?: string): Animal[] => {
  if (!filter) {
    return animals;
  }

  return animals.filter((animal) => animal.name.toLowerCase().includes(filter.toLowerCase()));
};
