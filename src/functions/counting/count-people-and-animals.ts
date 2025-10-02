import { Country } from '../../types/types';
import { appendCountToName } from './append-count-to-name';

export const countPeopleAndAnimals = (countries: Country[]): Country[] => {
  return countries.map(({ name, people }) => ({
    name: appendCountToName(name, people.length),
    people: people.map(({ name, animals }) => ({
      name: appendCountToName(name, animals.length),
      animals,
    })),
  }));
};
