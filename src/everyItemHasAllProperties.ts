import hasAllProperties from './hasAllProperties';

function everyItemHasAllProperties(array: object[], requiredProperties: string[]) {
  return array.every((item) => hasAllProperties(item, requiredProperties));
}

export default everyItemHasAllProperties;
