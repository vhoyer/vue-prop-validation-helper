# Vue Prop Validation Helper

Some extra utils to help you validate your properties.

## helpers

Here I will list the helpers provided by this library.

### objectHasAllProperties

Check for every property one object must have to succed validation.

```ts
export function objectHasAllProperties(object: Object,properties: Array<String>) { ... }
```

```js
export default {
  props: {
    myProp: {
      type: Object,
      required: true,
      validator: object => objectHasAllProperties(object, [
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
