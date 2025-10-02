import { describe, expect, it } from 'vitest';
import { filterAnimals } from '../../src/functions/filtering/filter-animals';
import { Animal } from '../../src/types/types';

describe('filterAnimals', () => {
  const animals: Animal[] = [{ name: 'Dog' }, { name: 'Cat' }, { name: 'Parrot' }];

  it('returns all animals if no filter is provided', () => {
    expect(filterAnimals(animals)).toEqual(animals);
  });

  it('filters animals by name (case insensitive)', () => {
    expect(filterAnimals(animals, 'do')).toEqual([{ name: 'Dog' }]);
    expect(filterAnimals(animals, 'CAT')).toEqual([{ name: 'Cat' }]);
    expect(filterAnimals(animals, 'rro')).toEqual([{ name: 'Parrot' }]);
  });

  it('returns an empty array if no animals match the filter', () => {
    expect(filterAnimals(animals, 'fish')).toEqual([]);
  });
});
