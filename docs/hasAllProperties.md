# `hasAllProperties`

***[DEPRECATED] use [`objectShouldHave`](./objectShouldHave.md) instead***

Check for every property one object must have to succeed validation.

## Declaration

```ts
function hasAllProperties(obj: object, requiredProperties: string[]): boolean;
```

## Tests

```
PASS  test/hasAllProperties.test.ts
 Validators > hasAllProperties
   when an object is passed with all required properties
     ✓ returns true (2ms)
     ✓ does not call console.error
   when an object is passed missing a required property
     ✓ returns false
     ✓ call console.error with a message containing missing property name (1ms)
   when an object is passed missing more than one required property
     ✓ returns false (1ms)
     ✓ call console.error with a message containing all missing properties names
   when an empty array is passed as requiredProperties
     ✓ returns true (1ms)
```

## Usage example

```js
export default {
  props: {
    myProp: {
      type: Object,
      required: true,
      validator: object => hasAllProperties(object, [
        'object', 'should', 'have', 'all', 'these', 'properties',
      ]),
  },
}
```
