import { data } from '../src/data/data';
import { Country } from '../src/types/types';
import { appendCountToName, countPeopleAndAnimals } from '../src/utils/count-people-and-animals';
import { filterByAnimals } from '../src/utils/filter-by-animals';
import { parseCLIParams } from '../src/utils/parse-cli-params';

describe('CLI Params Parsing', () => {
  it('should ignore parsing with no arguments', () => {
    process.argv = ['node', 'dist/app.js'];
    const result = new Map();
    expect(parseCLIParams()).toEqual(result);
  });

  it('should ignore parsing with no "--" prefix', () => {
    process.argv = ['node', 'dist/app.js', 'filter=ry'];
    const result = new Map();
    expect(parseCLIParams()).toEqual(result);
  });

  it('should parse one argument', () => {
    process.argv = ['node', 'dist/app.js', '--filter=ry'];
    const result = new Map<string, string>([['filter', 'ry']]);
    expect(parseCLIParams()).toEqual(result);
  });

  it('should parse one argument without the "=" delimiter', () => {
    process.argv = ['node', 'dist/app.js', '--count'];
    const result = new Map<string, boolean>([['count', true]]);
    expect(parseCLIParams()).toEqual(result);
  });

  it('should parse multiple arguments', () => {
    process.argv = ['node', 'dist/app.js', '--filter=ry', '--count'];
    const result = new Map<string, string | boolean>([
      ['filter', 'ry'],
      ['count', true],
    ]);
    expect(parseCLIParams()).toEqual(result);
  });
});

describe('Filter by Animals', () => {
  it('should skip filtering and return the original data', () => {
    const result: Country[] = data;
    expect(filterByAnimals(data)).toEqual(result);
  });

  it('should filter and return all the countries containing animals having a name that matches the passed param', () => {
    const param = 'ry';
    const result: Country[] = [
      {
        name: 'Uzuzozne',
        people: [{ name: 'Lillie Abbott', animals: [{ name: 'John Dory' }] }],
      },
      {
        name: 'Satanwi',
        people: [{ name: 'Anthony Bruno', animals: [{ name: 'Oryx' }] }],
      },
    ];

    expect(filterByAnimals(data, param)).toEqual(result);
  });

  it('should not change the order of the keys', () => {
    const param = 'ca';
    const data: Country[] = [
      {
        name: 'Uzuzozne',
        people: [
          {
            name: 'Lillie Abbott',
            animals: [{ name: 'Rats' }, { name: 'Cats' }, { name: 'Gazelle' }],
          },
        ],
      },
      {
        name: 'Satanwi',
        people: [
          {
            name: 'Anthony Bruno',
            animals: [{ name: 'Rats' }, { name: 'Macaw' }, { name: 'Gazelle' }, { name: 'Cats' }, { name: 'Alpaca' }],
          },
        ],
      },
    ];
    const result: Country[] = [
      {
        name: 'Uzuzozne',
        people: [
          {
            name: 'Lillie Abbott',
            animals: [{ name: 'Cats' }],
          },
        ],
      },
      {
        name: 'Satanwi',
        people: [
          {
            name: 'Anthony Bruno',
            animals: [{ name: 'Macaw' }, { name: 'Cats' }, { name: 'Alpaca' }],
          },
        ],
      },
    ];

    expect(filterByAnimals(data, param)).toEqual(result);
  });
});

describe('Append count to name', () => {
  it('should append "[8]" to "Uzozozne"', () => {
    const name = 'Uzozozne';
    const count = 8;
    const result = 'Uzozozne [8]';

    expect(appendCountToName(name, count)).toEqual(result);
  });
});

describe('Count People and Animals', () => {
  it('should append counts to he names', () => {
    const data: Country[] = [
      {
        name: 'Uzuzozne',
        people: [{ name: 'Lillie Abbott', animals: [{ name: 'John Dory' }, { name: 'Macaw' }, { name: 'Gazelle' }] }],
      },
      {
        name: 'Satanwi',
        people: [
          { name: 'Anthony Bruno', animals: [{ name: 'Oryx' }] },
          { name: 'Lina Allen', animals: [] },
        ],
      },
    ];
    const result: Country[] = [
      {
        name: 'Uzuzozne [1]',
        people: [
          { name: 'Lillie Abbott [3]', animals: [{ name: 'John Dory' }, { name: 'Macaw' }, { name: 'Gazelle' }] },
        ],
      },
      {
        name: 'Satanwi [2]',
        people: [
          { name: 'Anthony Bruno [1]', animals: [{ name: 'Oryx' }] },
          { name: 'Lina Allen [0]', animals: [] },
        ],
      },
    ];

    expect(countPeopleAndAnimals(data)).toEqual(result);
  });
});
