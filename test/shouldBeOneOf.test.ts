/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, beforeAll, afterEach, it, expect, beforeEach, vi } from 'vitest';
import { shouldBeOneOf } from '../src';

describe('Validators > shouldBeOneOf', () => {
  let consoleError: any;

  beforeAll(() => {
    consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleError.mockReset();
  });

  it('returns a function', () => {
    expect(typeof shouldBeOneOf([])).toBe('function');
  });

  describe('the validator', () => {
    let validator: (arg0: any) => boolean;

    beforeEach(() => {
      validator = shouldBeOneOf([
        'option 1',
        'option 2',
      ]);
    });

    describe('when valid input is passed', () => {
      let result: boolean;

      beforeEach(() => {
        result = validator('option 1');
      });

      it('returns true', () => {
        expect(result).toBe(true);
      });

      it('don\'t call console.error', () => {
        expect(consoleError).not.toBeCalled();
      });
    });

    describe('when invalid input is passed', () => {
      let result: boolean;

      beforeEach(() => {
        result = validator('option 3');
      });

      it('validation fails', () => {
        expect(result).toBe(false);
      });

      it('calls console.error with a friendly message', () => {
        expect(consoleError).toBeCalledWith(
          'The value received was `', 'option 3', '`, but one of these were expected:\n',
          '- option 1\n',
          '- option 2\n',
        );
      });
    });
  });
});
