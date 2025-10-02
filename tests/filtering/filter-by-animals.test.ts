import { describe, expect, it } from 'vitest';
import { filterByAnimals } from '../../src/functions/filtering/filter-by-animals';
import { Country } from '../../src/types/types';

describe('filterByAnimals', () => {
  const countries: Country[] = [
    {
      name: 'Country A',
      people: [
        { name: 'Alice', animals: [{ name: 'Dog' }, { name: 'Cat' }] },
        { name: 'Bob', animals: [{ name: 'Parrot' }] },
      ],
    },
    {
      name: 'Country B',
      people: [
        { name: 'Charlie', animals: [{ name: 'Dog' }] },
        { name: 'David', animals: [] },
      ],
    },
  ];

  it('return all countries if no filter is provided', () => {
    expect(filterByAnimals(countries)).toEqual(countries);
  });

  it('filters countries by animal name', () => {
    expect(filterByAnimals(countries, 'cat')).toEqual([
      {
        name: 'Country A',
        people: [{ name: 'Alice', animals: [{ name: 'Cat' }] }],
      },
    ]);
    expect(filterByAnimals(countries, 'dog')).toEqual([
      {
        name: 'Country A',
        people: [{ name: 'Alice', animals: [{ name: 'Dog' }] }],
      },
      {
        name: 'Country B',
        people: [{ name: 'Charlie', animals: [{ name: 'Dog' }] }],
      },
    ]);
  });

  it('returns an empty array if no countries match the filter', () => {
    expect(filterByAnimals(countries, 'fish')).toEqual([]);
  });
});
