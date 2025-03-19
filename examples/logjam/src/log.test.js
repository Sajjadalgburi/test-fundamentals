import { expect, it, vi, beforeEach, afterEach, describe } from 'vitest';
import { log } from './log';

describe('logger', () => {
  describe('development', () => {
    beforeEach(() => {
      vi.stubEnv('MODE', 'development');
    });

    afterEach(() => {
      vi.resetAllMocks();
    });

    it('logs to the console in development mode', () => {
      const logSpy = vi.spyOn(console, 'log');

      log('Hello');

      expect(logSpy).toHaveBeenCalledOnce();
      expect(logSpy).toHaveBeenCalledWith('Hello');
    });
  });
});
