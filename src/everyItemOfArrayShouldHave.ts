import hasAllProperties from './hasAllProperties';

function everyItemOfArrayShouldHave(requiredProperties: string[]) {
  return (array: object[]) => {
    return array.every((item) => hasAllProperties(item, requiredProperties));
  };
}

export default everyItemOfArrayShouldHave;
