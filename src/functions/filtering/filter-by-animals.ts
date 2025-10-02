import { Country } from '../../types/types';
import { filterPeopleByAnimals } from './filter-people-by-animals';

/**
 * Filters countries by filtering their people and animals by name, case insensitive.
 * @param countries Array of countries to filter.
 * @param filter Optional filter string.
 * @returns A new array of filtered countries.
 */
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
