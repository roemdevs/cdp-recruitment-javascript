import { describe, expect, it } from 'vitest';
import { filterPeopleByAnimals } from '../../src/functions/filtering/filter-people-by-animals';
import { Person } from '../../src/types/types';

describe('filterPeopleByAnimals', () => {
  const people: Person[] = [
    { name: 'Alice', animals: [{ name: 'Dog' }, { name: 'Cat' }] },
    { name: 'Bob', animals: [{ name: 'Parrot' }] },
    { name: 'Charlie', animals: [{ name: 'Dog' }] },
  ];

  it('returns all people if no filter is provided', () => {
    expect(filterPeopleByAnimals(people)).toEqual(people);
  });

  it('filters people by animal name', () => {
    expect(filterPeopleByAnimals(people, 'cat')).toEqual([{ name: 'Alice', animals: [{ name: 'Cat' }] }]);
    expect(filterPeopleByAnimals(people, 'dog')).toEqual([
      { name: 'Alice', animals: [{ name: 'Dog' }] },
      { name: 'Charlie', animals: [{ name: 'Dog' }] },
    ]);
  });

  it('returns an empty array if no people match the filter', () => {
    expect(filterPeopleByAnimals(people, 'fish')).toEqual([]);
  });
});
