# `everyItemHasAllProperties`

***[DEPRECATED] use [`everyItemOfArrayShouldHave`](./everyItemOfArrayShouldHave.md) instead***

Check if every item is a object and every object has all required properties.

## Declaration

```ts
function everyItemHasAllProperties(array: object[], requiredProperties: string[]): boolean;
```

# Tests

```
PASS  test/everyItemHasAllProperties.test.ts
 Validators > everyItemHasAllProperties
   when a valid array is passed as value to be validated
     ✓ returns true (2ms)
     ✓ does not call console.error
   when an empty array is passed to be validated
     ✓ returns true
   when an invalid array is passed as value to be validated
     ✓ returns false
     ✓ calls console.error with a message listing every missing property on the first inadequate item (2ms)
```

## Usage example

```js
export default {
  props: {
    myProp: {
      type: Array,
      required: true,
      validator: array => everyItemHasAllProperties(array, [
        'every', 'item', 'should', 'have', 'all', 'these', 'properties',
      ]),
  },
}
```
