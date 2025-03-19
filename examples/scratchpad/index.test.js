import { test, expect, vi } from 'vitest';

const random = vi.spyOn(Math, 'random').mockImplementation(() => 0.5);

test('a super simple test', () => {
  const mockFn = vi.fn();

  mockFn('hello world');

  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledWith('hello world');
  expect(mockFn).toHaveBeenCalledOnce();
  expect(mockFn).toHaveBeenCalledTimes(1);
});
