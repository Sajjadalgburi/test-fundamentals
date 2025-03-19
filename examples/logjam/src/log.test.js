import { expect, it, vi, beforeEach, afterEach, describe } from 'vitest';
import { log } from './log';

describe('logger', () => {
  describe('development', () => {
    it('logs to the console in development mode', () => {
      const logSpy = vi.spyOn(console, 'log');

      log('Hello', {
        mode: 'development',
        callback: logSpy,
      });

      expect(logSpy).toHaveBeenCalledOnce();
      expect(logSpy).toHaveBeenCalledWith('Hello');
    });
  });

  describe('production', () => {
    it('it shoud NOT console log in production mode', () => {
      const logSpy = vi.spyOn(console, 'log');

      log('Hello', {
        mode: 'production',
        callback: logSpy,
      });

      expect(logSpy).not.toHaveBeenCalled();
    });
  });
});
