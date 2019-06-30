interface IConfig {
  requiredProperties: string[];
}

function listMissingPropertiesFrom(obj: object, { requiredProperties }: IConfig) {
  return requiredProperties.reduce((acc: string[], cur) => {
    if (obj.hasOwnProperty(cur)) {
      return acc;
    }

    acc.push(cur);

    return acc;
  }, []);
}

export default listMissingPropertiesFrom;
