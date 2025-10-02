import { describe, expect, it } from 'vitest';
import { countPeopleAndAnimals } from '../../src/functions/counting/count-people-and-animals';
import { Country } from '../../src/types/types';

describe('countPeopleAndAnimals', () => {
  it('should append correct counts to country and people names', () => {
    const input: Country[] = [
      {
        name: 'Country A',
        people: [
          { name: 'Alice', animals: [{ name: 'Dog' }, { name: 'Cat' }] },
          { name: 'Bob', animals: [] },
        ],
      },
      {
        name: 'Country B',
        people: [],
      },
    ];

    const result = countPeopleAndAnimals(input);

    expect(result).toEqual([
      {
        name: 'Country A [2]',
        people: [
          { name: 'Alice [2]', animals: [{ name: 'Dog' }, { name: 'Cat' }] },
          { name: 'Bob [0]', animals: [] },
        ],
      },
      {
        name: 'Country B [0]',
        people: [],
      },
    ]);
  });

  it('should handle empty input array', () => {
    expect(countPeopleAndAnimals([])).toEqual([]);
  });
});
