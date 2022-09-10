import { atom } from 'jotai';

export const isMenuOpenAtom = atom<boolean>(false);

export const main = ['policies'];
export const menuWidth = '35rem';
export const jobs: { [key: string]: any } = import.meta.glob(
  './contents/jobs/*.yaml',
  {
    eager: true,
  }
);
