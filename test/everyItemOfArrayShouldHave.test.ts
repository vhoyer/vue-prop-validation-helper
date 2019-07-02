import { everyItemOfArrayShouldHave } from '../src';

describe('Validators > everyItemOfArrayShouldHave', () => {
  const consoleError = jest.fn();

  beforeAll(() => {
    console.error = consoleError;
  });

  afterEach(() => {
    consoleError.mockReset();
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
        ]);
      });

      it('returns false', () => {
        expect(result).toBe(false);
      });

      it('does call console.error with missing value', () => {
        expect(consoleError).toBeCalledWith(
          expect.stringContaining('name'),
        );
      });
    });
  });
});
