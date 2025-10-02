import { Country } from '../../types/types';
import { filterPeopleByAnimals } from './filter-people-by-animals';

export const filterByAnimals = (countries: Country[], filter?: string | boolean): Country[] => {
  if (!filter || typeof filter !== 'string') {
    return countries;
  }

  return countries.reduce((filteredCountries: Country[], country: Country) => {
    const filteredPeople = filterPeopleByAnimals(country.people, filter);

    if (filteredPeople.length > 0) {
      filteredCountries.push({ name: country.name, people: filteredPeople });
    }

    return filteredCountries;
  }, []);
};
