# Vue Prop Validation Helper

Some extra utils to help you validate your properties.

## helpers

Here I will list the helpers provided by this library.

### hasAllProperties

Check for every property one object must have to succed validation.

```ts
export function hasAllProperties(object: Object,properties: Array<String>) { ... }
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
