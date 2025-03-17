import { describe, it, expect } from 'vitest';

import { add, subtract, multiply, divide } from './arithmetic';

describe('add', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should add two negative numbers', () => {
    expect(add(-3, -4)).toBe(-7);
  });

  it('should parse strings into numbers', () => {
    expect(add('1', '2')).toBe(3);
  });

  it('should get angry if passed a word in the first argument', () => {
    expect(() => add(3, 'potato')).toThrow();
  });

  it('should get angry if passed a word in the seccond argument', () => {
    expect(() => add('potato', 3)).toThrow();
  });

  it('should throw an error if passed in an array', () => {
    expect(() => add([23, 4, 5, 'hey', {}], 3)).toThrow();
  });

  it('should throw an error if passed in undefined', () => {
    expect(() => add(10, undefined)).toThrow();
  });
});

describe('subtract', () => {
  it('should subtract two numbers', function () {
    expect(subtract(2, 2)).toBe(0);
  });

  it('should accept and array of nums and subtract the total from the array and the second argument', function () {
    expect(subtract([10, 2], 0)).toBe(8);
  });

  it('should throw an error if the array passed is more than length two', function () {
    expect(() => subtract([10, 2, 3, 4, 5], 0)).toThrow();
  });
});

describe('multiply', () => {
  it('should multiply two numbers together', () => {
    expect(multiply(3, 3)).toBe(9);
  });
});

describe('divide', () => {
  it('should divide two numbers together', () => {
    expect(divide(3, 2)).toBe(1.5);
  });
});
