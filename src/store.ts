import { atom } from 'jotai';
import { map } from 'lodash';
export const isMenuOpenAtom = atom<boolean>(false);

export const menuWidth = '35rem';

export const policies = map(
  import.meta.glob('./contents/policies/*.mdx', {
    eager: true,
  }),
  (value: { [key: string]: any }, index: string) => {
    return {
      name: index.replace(/\S*(\/\w*\/\w*).mdx/, '$1').toLowerCase(),
      url: index.replace(/\S*\/(w*).mdx/, '$1'),
      default: value.default,
    };
  }
) as unknown as Array<{ name: string; url: string; default: any }>;

export const jobs = map(
  import.meta.glob('./contents/jobs/*.yaml', {
    eager: true,
  }),
  (value: { [key: string]: any }) => value.default
) as unknown as Array<{ [key: string]: any }>;
