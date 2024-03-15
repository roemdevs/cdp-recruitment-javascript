import { Country } from '../types/types';

/**
 * @description Count and Append the number after the names
 * @param countries Countries we want to count
 * @returns a list of counted countries including counted people
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

/**
 * @description Append the number passed as parameter to the name
 * @param name the name of the country or people we want to count
 * @param count the number to append to the name
 * @returns a string like so: `name [count]`
 */
export const appendCountToName = (name: string, count: number): string => `${name} [${count}]`;
