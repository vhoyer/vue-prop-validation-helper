import { everyItemHasAllProperties } from '../src';

describe('Validators > everyItemHasAllProperties', () => {
  const consoleError = jest.fn();
  let oldError: any;

  beforeAll(() => {
    ({ error: oldError } = console);
    console.error = consoleError;
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
    it('returns true', () => {
      const array = [{
        prop1: 1,
        prop2: 1,
        prop3: 1,
      }];

      expect(everyItemHasAllProperties(array, requiredProperties));
    });

    it('does not call console.error', () => {
      expect(consoleError).not.toBeCalled();
    });
  });

  describe('when an empty array is passed to be validated', () => {
    it('returns true', () => {
      expect(everyItemHasAllProperties([], requiredProperties));
    });
  });
});
