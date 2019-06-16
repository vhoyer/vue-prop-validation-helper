# Vue Prop Validation Helper

[![CircleCI](https://circleci.com/gh/vhoyer/vue-prop-validation-helper.svg?style=svg)](https://circleci.com/gh/vhoyer/vue-prop-validation-helper)
[![Coverage Status](https://coveralls.io/repos/github/vhoyer/vue-prop-validation-helper/badge.svg)](https://coveralls.io/github/vhoyer/vue-prop-validation-helper)

Some extra utils to help you validate your properties.

## helpers

Here I will list the helpers provided by this library.

### hasAllProperties

Check for every property one object must have to succed validation.

```ts
function hasAllProperties(obj: object, requiredProperties: string[]): boolean;
```

```js
export default {
  props: {
    myProp: {
      type: Object,
      required: true,
      validator: object => hasAllProperties(object, [
        'each',
        'item',
        'on',
        'this',
        'list',
        'is',
        'a',
        'property',
        'myProp',
        'should',
        'have',
      ]),
  },
}
```
