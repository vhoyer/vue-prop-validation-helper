# `everyItemOfArrayShouldHave`

Check if every item is a object and every object has all required properties.

## Declaration

```ts
function everyItemOfArrayShouldHave(requiredProperties: string[]): (array: object[]) => boolean;
```

## Tests

```
PASS  test/everyItemOfArrayShouldHave.test.ts
 Validators > everyItemOfArrayShouldHave
   ✓ returns a function to serve as the validator (1ms)
   the validator
     when the passed array has only valid items
       ✓ returns true (1ms)
       ✓ does not call console.error
     when the passed array has any invalid item
       ✓ returns false
       ✓ does call console.error (1ms)
       ✓ call console.table with the missing properties in the corresponding indexes
```

## Usage example

```js
export default {
  props: {
    myProp: {
      type: Object,
      required: true,
      validator: everyItemOfArrayShouldHave([
        'all', 'these', 'properties',
      ]),
  },
}
```

