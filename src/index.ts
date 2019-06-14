export function hasAllProperties(obj: object, requiredProperties: string[]) {
  return requiredProperties.every((key) => {
    const objectHasProp = obj.hasOwnProperty(key);

    if (!objectHasProp) {
      console.error(`Object is missing "${key}" property, which is required`);
    }

    return objectHasProp;
  });
}
