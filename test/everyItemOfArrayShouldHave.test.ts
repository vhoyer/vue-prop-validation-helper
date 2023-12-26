import { describe, beforeAll, afterEach, beforeEach, it, expect, vi } from 'vitest';
import { everyItemOfArrayShouldHave } from '../src';

describe('Validators > everyItemOfArrayShouldHave', () => {
  const consoleError = vi.fn();
  const consoleTable = vi.fn();

  beforeAll(() => {
    console.error = consoleError;
    console.table = consoleTable;
  });

  afterEach(() => {
    consoleError.mockReset();
    consoleTable.mockReset();
  });

  it('returns a function to serve as the validator', () => {
    expect(typeof everyItemOfArrayShouldHave([])).toBe('function');
  });

  describe('the validator', () => {
    let validator: (obj: object[]) => boolean;

    beforeEach(() => {
      validator = everyItemOfArrayShouldHave(['name']);
    });

    describe('when the passed array has only valid items', () => {
      let result: boolean;

      beforeEach(() => {
        result = validator([
          { name: 'yay' },
        ]);
      });

      it('returns true', () => {
        expect(result).toBe(true);
      });

      it('does not call console.error', () => {
        expect(consoleError).not.toBeCalled();
      });
    });

    describe('when the passed array has any invalid item', () => {
      let result: boolean;

      beforeEach(() => {
        result = validator([
          { doesNotHaveName: 'awh' },
          { neitherDoThisHave: 'awh2' },
        ]);
      });

      it('returns false', () => {
        expect(result).toBe(false);
      });

      it('does call console.error', () => {
        expect(consoleError).toBeCalled();
      });

      it('call console.table with the missing properties in the corresponding indexes', () => {
        expect(consoleTable).toBeCalledWith([// an array with arrays:
          // containing the missing properties in each item
          ['name'],
          ['name'],
        ]);
      });
    });
  });
});
