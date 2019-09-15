# `shouldBeOneOf`

Test value passed against a list of valid options and fail if value is not present on list.

## Declaration

```ts
function shouldBeOneOf(options: string[]): (value: string) => boolean;
```

## Tests

```
PASS  test/shouldBeOneOf.test.ts
 Validators > shouldBeOneOf
   ✓ returns a function (2ms)
   the validator
     when valid input is passed
       ✓ returns true (1ms)
       ✓ don't call console.error
     when invalid input is passed
       ✓ validation fails (1ms)
       ✓ calls console.error with a friendly message (1ms)
```

## Usage example

```js
export default {
  props: {
    myProp: {
      type: String,
      required: true,
      validator: shouldBeOneOf([
        'these', 'properties',
      ]),
  },
}
```

Then the value passed to myProp can be either 'these' or 'properties'. Anything else will be invalid and will console will trow:

```
The value received was `invalid-value`, but one of these were expected:
- these
- properties
```
