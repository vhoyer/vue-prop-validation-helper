import listMissingPropertiesFrom from '../helper/listMissingProperties';

function everyItemOfArrayShouldHave(requiredProperties: string[]) {
  // return the vue validator function
  return (array: object[]) => scanArray(
    array,
    requiredProperties,
  );
}

function scanArray(array: object[], requiredProperties: string[]) {
  const missingPropertiesInEachItem = array.map((item) => {
    return listMissingPropertiesFrom(item, { requiredProperties });
  });

  const hasAnyInvalidItemInArray = missingPropertiesInEachItem.some((item) => {
    // if any item of this array has a length greater than zero it means
    // this property has an item with at least one property missing
    return item.length;
  });

  if (!hasAnyInvalidItemInArray) {
    return true;
  } else {
    console.error('Array (', array, ') has invalid items, see table below for missing itens:');

    console.table(missingPropertiesInEachItem);

    return false;
  }
}

export default everyItemOfArrayShouldHave;
