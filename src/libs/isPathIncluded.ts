import { compact } from 'lodash';

export const isPathIncluded = (
  path: string | undefined,
  array: string[]
): boolean[] => {
  const arrayResult = array.map((string): boolean | null => {
    if (path !== undefined) return string.includes(path.toLowerCase());
    return null;
  });
  return compact(arrayResult);
};
