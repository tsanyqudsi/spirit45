import { compact } from 'lodash';

export const isPathIncluded = (
  path: string | undefined,
  array: string[],
  returnIncluded?: boolean
): boolean[] => {
  const arrayResult = array.map((string): boolean | undefined => {
    if (path !== undefined) return string.includes(path.toLowerCase());
    return undefined;
  });
  if (returnIncluded === true) return compact(arrayResult);
  return compact(
    arrayResult.map((result): boolean | undefined => {
      if (result != null) return !result;
      return undefined;
    })
  );
};
