import { Animal } from '../../types/types';

/**
 * Filters an array of animals by name, case insensitive.
 * @param animals Array of animals to filter.
 * @param filter Optional filter string.
 * @returns A new array of filtered animals.
 */
export const filterAnimals = (animals: Animal[], filter?: string): Animal[] => {
  if (!filter) {
    return animals;
  }

  return animals.filter((animal) => animal.name.toLowerCase().includes(filter.toLowerCase()));
};
