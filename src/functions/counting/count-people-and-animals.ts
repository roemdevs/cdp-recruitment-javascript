import { Country } from '../../types/types';
import { appendCountToName } from './append-count-to-name';

/**
 * Appends the count of people to each country name and the count of animals to each person name.
 * @param countries Array of countries to process.
 * @returns A new array with counts appended to names.
 */
export const countPeopleAndAnimals = (countries: Country[]): Country[] => {
  return countries.map(({ name, people }) => ({
    name: appendCountToName(name, people.length),
    people: people.map(({ name, animals }) => ({
      name: appendCountToName(name, animals.length),
      animals,
    })),
  }));
};
