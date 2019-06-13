export function hasAllProperties(object: Object, requiredProperties: Array<string>) {
  return requiredProperties.every((key) => {
    const objectHasProp = object.hasOwnProperty(key);

    if (!objectHasProp) {
      console.error(`Object is missing "${key}" property which is required`);
    }

    return objectHasProp;
  });
}
