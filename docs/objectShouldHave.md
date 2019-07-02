# `objectShouldHave`

Check for every property one object must have to succeed validation.

## Declaration

```ts
function objectShouldHave(requiredProperties: string[]): (obj: object) => boolean;
```

## Tests

```
PASS  test/objectShouldHave.test.ts
 Validators > objectShouldHave
   ✓ returns a function to serve as the validator
   the validator
     ✓ returns true if object has all properties specified (4ms)
     ✓ does not call console.error if prop pass validation (1ms)
     ✓ returns false if object is missing a required property
     ✓ outputs a console.error if there are missing properties
     ✓ outputs a console.error with a list of the missing properties (1ms)
     ✓ does not list properties present on the object when value fails validation
```

## Usage example

```js
export default {
  props: {
    myProp: {
      type: Object,
      required: true,
      validator: objectShouldHave([
        'all', 'these', 'properties',
      ]),
  },
}
```
