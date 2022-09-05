import * as React from 'react';
import { Box, useTheme } from '@mui/material';
import { menuWidth } from '@constants/layouts';
import { useAtomValue } from 'jotai';
import { isMenuOpen } from '@store';
import { Footer } from '@components';

interface DefaultProps {
  children: React.ReactNode;
}

export const Default = (props: DefaultProps): JSX.Element => {
  const menuIsOpen = useAtomValue(isMenuOpen);

  const theme = useTheme();
  return (
    <Box
      marginRight={menuIsOpen ? menuWidth : 0}
      sx={{
        transition: theme.transitions.create(['margin-right', 'transform'], {
          duration: theme.transitions.duration.standard,
          delay: menuIsOpen ? 20 : 0,
        }),
      }}
    >
      {props.children}
      <Footer />
    </Box>
  );
};
