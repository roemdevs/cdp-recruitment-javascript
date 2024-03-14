import { Animal, Country, Person } from '../types/types';

/**
 * @description Filter the countries by (partial) animal names
 * @param countries Countries to filter
 * @param filter Filter to be applied to the animal names
 * @returns filtered countries
 */
export const filterByAnimals = (countries: Country[], filter?: string | boolean): Country[] => {
  if (!filter || typeof filter !== 'string') {
    return countries;
  }

  /**
   * I could have used destructuring (`country` -> { name, people }, and `person` -> { name, animals })
   * But in order to ensure that we know exactly what property we are talking about, I decided to not to do this
   */
  return countries.reduce((previousCountries: Country[], country: Country) => {
    const filteredPeopleByAnimals = country.people.reduce((previousPeople: Person[], person: Person) => {
      const filteredAnimals = person.animals.filter((animal: Animal) =>
        animal.name.toLowerCase().includes(filter.toLowerCase()),
      );

      if (filteredAnimals.length > 0) {
        previousPeople.push({ name: person.name, animals: filteredAnimals });
      }

      return previousPeople;
    }, []);

    if (filteredPeopleByAnimals.length > 0) {
      previousCountries.push({ name: country.name, people: filteredPeopleByAnimals });
    }

    return previousCountries;
  }, []);
};
