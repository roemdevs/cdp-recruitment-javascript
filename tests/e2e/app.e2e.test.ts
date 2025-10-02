import { execSync } from 'node:child_process';
import { beforeEach, describe, expect, it } from 'vitest';
import { COUNT_RESULT } from './results/count.result';

describe('E2E Application Tests', () => {
  beforeEach(() => {
    process.env.NODE_ENV = 'test';
  });

  it('should pass count case', () => {
    const result = execSync('node dist/app.js --count', {
      stdio: ['inherit'],
    });

    const output = result.toString();

    expect(output).toEqual(COUNT_RESULT);
  });
});
