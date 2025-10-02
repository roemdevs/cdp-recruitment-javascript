import { Person } from '../../types/types';
import { filterAnimals } from './filter-animals';

export const filterPeopleByAnimals = (people: Person[], filter?: string): Person[] => {
  return people.reduce((filteredPeople: Person[], person: Person) => {
    const filteredAnimals = filterAnimals(person.animals, filter);

    if (filteredAnimals.length > 0) {
      filteredPeople.push({ name: person.name, animals: filteredAnimals });
    }

    return filteredPeople;
  }, []);
};
