import { Person } from '../../types/types';
import { filterAnimals } from './filter-animals';

/**
 * Filters an array of people by their animals' names, case insensitive.
 * @param people Array of people to filter.
 * @param filter Optional filter string.
 * @returns A new array of filtered people.
 */
export const filterPeopleByAnimals = (people: Person[], filter?: string): Person[] => {
  return people.reduce((filteredPeople: Person[], person: Person) => {
    const filteredAnimals = filterAnimals(person.animals, filter);

    if (filteredAnimals.length > 0) {
      filteredPeople.push({ name: person.name, animals: filteredAnimals });
    }

    return filteredPeople;
  }, []);
};
