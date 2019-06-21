function hasAllProperties(obj: object, requiredProperties: string[]) {
  const missingProperties = requiredProperties.reduce((acc: string[], cur) => {
    if (obj.hasOwnProperty(cur)) {
      return acc;
    }

    acc.push(cur);

    return acc;
  }, []);

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
