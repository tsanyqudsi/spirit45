import chroma from 'chroma-js';
import { grey } from '@mui/material/colors';

export const getColor = (): string => {
  const width = document.documentElement.clientWidth;

  const elem = document.elementFromPoint(width - 2, 48);
  const color =
    elem !== null
      ? window.getComputedStyle(elem, null).getPropertyValue('background-color')
      : 'rgb(255,255,255)';
  return chroma.contrast('white', color) < 5 || color === 'rgba(0, 0, 0, 0)'
    ? grey[700]
    : 'white';
};
