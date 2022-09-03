import * as React from 'react';
import { capitalize } from 'lodash';
import {
  Drawer,
  MenuList,
  MenuItem as Item,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { red } from '@mui/material/colors';

import { useAtomValue } from 'jotai';
import { isMenuOpen } from '@store';

import { getSortedRoutes } from '@libs/getSortedRoutes';
import { menuWidth } from '@constants/layouts';

const sortedRoutes = getSortedRoutes();

const ItemSX = {
  display: 'flex',
  justifyContent: 'center',
  fontWeight: 500,
  letterSpacing: '0.1rem',
};

const MenuItem = (): JSX.Element => {
  return (
    <MenuList
      sx={{
        width: '100%',
      }}
    >
      {sortedRoutes.map((route): JSX.Element | undefined => {
        if (route.path === '/')
          return (
            <Item sx={ItemSX} key='route-to-home'>
              Home
            </Item>
          );
        if (route.path != null)
          return (
            <Item sx={ItemSX} key={`route-to-${route.path}`}>
              {capitalize(route.path)}
            </Item>
          );
        return undefined;
      })}
    </MenuList>
  );
};

export const Menu = (): JSX.Element => {
  const menuState = useAtomValue(isMenuOpen);
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Drawer
      variant='persistent'
      open={menuState}
      anchor='right'
      PaperProps={{
        sx: {
          width: isNotMobile ? menuWidth : '100vw',
          backgroundColor: 'white',
          color: red[900],
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          paddingTop: isNotMobile ? '5rem' : '3rem',
          fontSize: '1.4rem',
        },
      }}
    >
      <MenuItem />
    </Drawer>
  );
};
