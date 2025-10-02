import { describe, expect, it } from 'vitest';
import { appendCountToName } from '../../src/functions/counting/append-count-to-name';

describe('appendCountToName', () => {
  it('should append count in brackets to the name', () => {
    expect(appendCountToName('Alice', 3)).toBe('Alice [3]');
  });

  it('should append count if there is no name', () => {
    expect(appendCountToName('', 5)).toBe(' [5]');
  });

  it('should handle zero count', () => {
    expect(appendCountToName('Bob', 0)).toBe('Bob [0]');
  });
});
