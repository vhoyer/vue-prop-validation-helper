import { objectShouldHave } from '../src';

describe('Validators > objectShouldHave', () => {
  const consoleError = jest.fn();

  beforeAll(() => {
    console.error = consoleError;
  });

  afterEach(() => {
    consoleError.mockReset();
  });

  it('returns a function to serve as the validator', () => {
    expect(typeof objectShouldHave([])).toBe('function');
  });

  describe('the validator', () => {
    let validator: (obj: object) => boolean;

    it('returns true if object has all properties specified', () => {
      validator = objectShouldHave(['prop1']);

      expect(validator({ prop1: 'yay' })).toBe(true);
    });

    it('does not call console.error if prop pass validation', () => {
      validator = objectShouldHave(['prop1']);
      validator({ prop1: 'yay' });

      expect(consoleError).not.toBeCalled();
    });

    it('returns false if object is missing a required property', () => {
      validator = objectShouldHave(['prop2']);

      expect(validator({ prop1: 'yay' })).toBe(false);
    });

    it('outputs a console.error if there are missing properties', () => {
      validator = objectShouldHave(['prop2']);
      validator({ prop1: 'yay' });

      expect(consoleError).toHaveBeenCalled();
    });

    it('outputs a console.error with a list of the missing properties', () => {
      validator = objectShouldHave(['prop2', 'prop3']);
      validator({ prop1: 'yay' });

      expect(consoleError).toBeCalledWith(expect.stringContaining('prop2'));
      expect(consoleError).toBeCalledWith(expect.stringContaining('prop3'));
    });

    it('does not list properties present on the object when value fails validation', () => {
      validator = objectShouldHave(['prop2', 'prop3']);
      validator({ prop1: 'yay' });

      expect(consoleError).not.toBeCalledWith(expect.stringContaining('prop1'));
    });
  });
});
