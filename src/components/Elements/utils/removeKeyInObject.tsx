export const removeKeyInObject = (mainObj, comparisonObj) => {
  const result = { ...mainObj };

  Object.keys(mainObj).forEach((key) => {
    if (
      comparisonObj.hasOwnProperty(key) &&
      mainObj[key] === comparisonObj[key]
    ) {
      delete result[key];
    }
  });

  return result;
};
