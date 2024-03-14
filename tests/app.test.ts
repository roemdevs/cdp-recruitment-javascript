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
