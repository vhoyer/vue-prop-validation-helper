import { hasAllProperties } from '../src/index';

describe('Validators > hasAllProperties', () => {
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
    'all',
    'props',
  ];

  describe('when an object is passed with all required properties', () => {
    const obj = {
      all: 'random',
      props: 'value',
    };

    it('returns true', () => {
      expect(hasAllProperties(obj, requiredProperties)).toBe(true);
    });

    it('does not call console.error', () => {
      hasAllProperties(obj, requiredProperties);

      expect(consoleError).not.toBeCalled();
    });
  });

  describe('when an object is passed missing a required property', () => {
    const obj = {
      props: 'value',
    };

    it('returns false', () => {
      expect(hasAllProperties(obj, requiredProperties)).toBe(false);
    });

    it('call console.error with a message containing missing property name', () => {
      hasAllProperties(obj, requiredProperties);

      expect(consoleError).toBeCalledWith('Object is missing "all" property, which is required');
    });
  });
});
