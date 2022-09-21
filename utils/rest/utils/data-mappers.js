import camelcaseKeys from "camelcase-keys";
import pickBy from "lodash/pickBy";

export const mapPaginatorData = (obj) => {
  const formattedValues = camelcaseKeys(obj);
  return {
    ...formattedValues,
    hasMorePages: formattedValues.lastPage !== formattedValues.currentPage,
  };
};

export const parseSearchString = (values) => {
  const parsedValues = pickBy(values);
  return Object.keys(parsedValues)
    .map((k) => {
      if (k === "type") {
        return `${k}.slug:${parsedValues[k]};`;
      }
      if (k === "category") {
        return `categories.slug:${parsedValues[k]};`;
      }
      return `${k}:${parsedValues[k]};`;
    })
    .join("")
    .slice(0, -1);
};
