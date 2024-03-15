import { execSync } from 'node:child_process';

// I moved the results to other files in order to keep this file simple to read
import { RESULT_CASE_2 } from './e2e/count.result';
import { RESULT_CASE_3 } from './e2e/filter-and-count.result';
import { RESULT_CASE_1 } from './e2e/filter.result';
import { RESULT_CASE_4 } from './e2e/missing-params.result';

describe('E2E tests', () => {
  it('should pass case 1: filter', () => {
    const result = execSync('node dist/app.js --filter=ry', { stdio: ['inherit'] });
    const output = result.toString();

    expect(output).toEqual(RESULT_CASE_1);
  });

  it('should pass case 2: counting', () => {
    const result = execSync('node dist/app.js --count', { stdio: ['inherit'] });
    const output = result.toString();

    expect(output).toEqual(RESULT_CASE_2);
  });

  it('should pass case 3: filtering and counting', () => {
    const result = execSync('node dist/app.js --filter=car --count', { stdio: ['inherit'] });
    const output = result.toString();

    expect(output).toEqual(RESULT_CASE_3);
  });

  it('should print a warning and the data object', () => {
    const result = execSync('node dist/app.js', { stdio: ['inherit'] });
    const output = result.toString();

    expect(output).toEqual(RESULT_CASE_4);
  });
});
