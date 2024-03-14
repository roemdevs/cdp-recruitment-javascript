import { data } from '../src/data/data';
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
});
