function shouldBeOneOf<T>(options: T[]) {
  return (value: T): boolean => {
    const result = options.includes(value);

    if (!result) {
      console.error(
        'The value received was `', value, '`, but one of these were expected:\n',
        ...options.map((item) => `- ${item}\n`),
      );
    }

    return result;
  };
}

export default shouldBeOneOf;
