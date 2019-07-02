import { everyItemHasAllProperties } from '../src';

describe('Validators > everyItemHasAllProperties', () => {
  const consoleError = jest.fn();
  let oldError: any;

  beforeAll(() => {
    ({ error: oldError } = console);
    console.error = consoleError;
    console.warn = jest.fn();
  });

  afterAll(() => {
    console.error = oldError;
  });

  afterEach(() => {
    consoleError.mockReset();
  });

  const requiredProperties = [
    'prop1',
    'prop2',
    'prop3',
  ];

  describe('when a valid array is passed as value to be validated', () => {
    const array = [{
      prop1: 1,
      prop2: 1,
      prop3: 1,
    }];

    it('returns true', () => {
      expect(everyItemHasAllProperties(array, requiredProperties)).toBe(true);
    });

    it('does not call console.error', () => {
      everyItemHasAllProperties(array, requiredProperties);

      expect(consoleError).not.toBeCalled();
    });
  });

  describe('when an empty array is passed to be validated', () => {
    it('returns true', () => {
      expect(everyItemHasAllProperties([], requiredProperties));
    });
  });

  describe('when an invalid array is passed as value to be validated', () => {
    const array = [{
      prop1: 1,
      prop2: 1,
      prop3: 1,
    }, {
      prop1: 1,
    }, {
      // the third item is empty
      // if this was the first object
      // it should name all properties
    }];

    it('returns false', () => {
      expect(everyItemHasAllProperties(array, requiredProperties)).toBe(false);
    });

    it('calls console.error with a message listing every missing property on the first inadequate item', () => {
      everyItemHasAllProperties(array, requiredProperties);

      expect(consoleError).toBeCalledWith(expect.stringContaining('prop3'));
      expect(consoleError).toBeCalledWith(expect.stringContaining('prop3'));
    });
  });
});
