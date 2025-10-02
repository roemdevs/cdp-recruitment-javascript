import { describe, expect, it } from 'vitest';
import { parseCLIParams } from '../src/functions/parse-cli-params.js';

describe('Parse CLI Params', () => {
  it('should ignore parsing when no params are provided', () => {
    process.argv = ['node', 'dist/app.js'];
    const result = new Map();

    expect(parseCLIParams()).toEqual(result);
  });

  it('should ignore parsing when params are not prefixed with --', () => {
    process.argv = ['node', 'dist/app.js', 'filter=ry'];
    const result = new Map();

    expect(parseCLIParams()).toEqual(result);
  });

  it('should parse a single param with a value (string)', () => {
    process.argv = ['node', 'dist/app.js', '--filter=ry'];
    const result = new Map<string, string>([['filter', 'ry']]);

    expect(parseCLIParams()).toEqual(result);
  });

  it('should parse a single param without a value (boolean)', () => {
    process.argv = ['node', 'dist/app.js', '--count'];
    const result = new Map<string, boolean>([['count', true]]);

    expect(parseCLIParams()).toEqual(result);
  });

  it('should parse multiple params with and without values', () => {
    process.argv = ['node', 'dist/app.js', '--filter=ry', '--count'];
    const result = new Map<string, string | boolean>([
      ['filter', 'ry'],
      ['count', true],
    ]);

    expect(parseCLIParams()).toEqual(result);
  });
});
