import { describe, it, expect } from 'vitest';

import { add, subtract, multiply, divide } from './arithmetic';

describe('add', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
  describe.skip('should NOT add non-number types', () => {
    expect(add('hey', 'some'));
  });
});

describe('subtract', () => {
  it('should subtract two numbers', function () {
    expect(subtract(2, 2)).toBe(0);
  });
});

describe.todo('multiply', () => {});

describe.todo('divide', () => {});
