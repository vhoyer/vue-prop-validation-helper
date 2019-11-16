import * as validators from './validators';

interface IOptions {
  default: any;
  errorMessage?: string;
  options?: any[];
  required?: boolean;
  type: (value: any) => any;
  validator?: (a: any) => boolean;
}

export default function(config: IOptions): Record<string, any> {
  const prop: Record<string, any> = {
    default: config.default,
    required: config.required,
    type: config.type,
  };

  if (config.options) {
    prop.validator = validators.shouldBeOneOf(config.options);
  }

  return prop;
}
