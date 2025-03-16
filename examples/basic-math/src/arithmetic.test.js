import { describe, it, expect } from 'vitest';

import { add } from './arithmetic';

describe('add', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe.todo('subtract', () => {});

describe.todo('multiply', () => {});

describe.todo('divide', () => {});
