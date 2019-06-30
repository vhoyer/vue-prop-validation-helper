import listMissingPropertiesFrom from './helper/listMissingProperties';

function hasAllProperties(obj: object, requiredProperties: string[]) {
  const missingProperties = listMissingPropertiesFrom(obj, { requiredProperties });

  if (missingProperties.length) {
    console.error(
      `Object is missing the following properties, which are all required:\n- ${
        missingProperties.join('\n- ')
      }`,
    );

    return false;
  } else {
    return true;
  }
}

export default hasAllProperties;
