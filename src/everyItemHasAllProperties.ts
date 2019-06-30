import hasAllProperties from './hasAllProperties';

function everyItemHasAllProperties(array: object[], requiredProperties: string[]) {
  console.warn(
    '[DEPRECATED]: use everyItemOfArrayShouldHave instead\n' +
    'https://github.com/vhoyer/vue-prop-validation-helper/blob/master/docs/everyItemOfArrayShouldHave.md',
  );

  return array.every((item) => hasAllProperties(item, requiredProperties));
}

export default everyItemHasAllProperties;
