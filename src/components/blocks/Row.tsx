import * as React from 'react';
import { Box, BoxProps } from '@mui/material';
import { setHideOnMobile } from '@libs/setHideOnMobile';

interface RowProps extends BoxProps {
  hideOnMobile?: number[];
  children: React.ReactElement[];
}

export const Row = (props: RowProps): JSX.Element | null => {
  const { children, hideOnMobile, ...attr } = props;

  if (React.Children.count(props.children) < 3)
    return (
      <Box paddingY='3rem' paddingX='5rem' display='flex' {...attr}>
        {hideOnMobile !== undefined
          ? setHideOnMobile(children, hideOnMobile)
          : children}
      </Box>
    );
  else return null;
};
