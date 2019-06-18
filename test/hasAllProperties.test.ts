import { hasAllProperties } from '../src';

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
    'prop1',
    'prop2',
    'prop3',
  ];

  describe('when an object is passed with all required properties', () => {
    const obj = {
      prop1: 'all',
      prop2: 'props',
      prop3: 'are present',
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
      prop1: 'prop3',
      prop2: 'is missing',
    };

    it('returns false', () => {
      expect(hasAllProperties(obj, requiredProperties)).toBe(false);
    });

    it('call console.error with a message containing missing property name', () => {
      hasAllProperties(obj, requiredProperties);

      expect(consoleError).toBeCalledWith('Object is missing "prop3" property, which is required');
    });
  });

  describe('when an empty array is passed as requiredProperties', () => {
    const obj = {
      prop1: 'well',
      prop2: 'just',
      prop3: 'whatever',
    };

    it('returns true', () => {
      expect(hasAllProperties(obj, [])).toBe(true);
    });
  });
});
