import * as React from 'react';
import { Box, BoxProps } from '@mui/material';
import { setHideOnMobile } from '@libs/setHideOnMobile';

interface RowProps extends BoxProps {
  hideOnMobile?: number[];
  children: React.ReactElement[] | React.ReactElement;
  id: string;
}

export const Row = ({ ...props }: RowProps): JSX.Element => {
  const { id, children, hideOnMobile, justifyContent, ...attr } = props;

  const editedChildren = Array.isArray(children)
    ? children.map((child, index) => {
        return React.cloneElement(child, {
          key: `${id}-${index}`,
        });
      })
    : children;

  return (
    <Box
      {...attr}
      display='flex'
      justifyContent={
        React.Children.count(editedChildren) === 1 ? 'center' : justifyContent
      }
    >
      {hideOnMobile !== undefined && Array.isArray(editedChildren)
        ? setHideOnMobile(editedChildren, hideOnMobile)
        : editedChildren}
    </Box>
  );
};
