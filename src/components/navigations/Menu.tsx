import * as React from 'react';
import { capitalize } from 'lodash';
import { Drawer, MenuList, MenuItem as Item } from '@mui/material';
import { red } from '@mui/material/colors';

import { useAtomValue } from 'jotai';
import { isMenuOpen } from '@store';

import { getSortedRoutes } from '@libs/getSortedRoutes';
import { menuWidth } from '@constants/layouts';

const sortedRoutes = getSortedRoutes();

const MenuItem = (): JSX.Element => {
  return (
    <MenuList
      sx={{
        width: '100%',
      }}
    >
      {sortedRoutes.map((route): JSX.Element | undefined => {
        if (route.path != null)
          return (
            <Item
              sx={{
                display: 'flex',
                justifyContent: 'center',
                fontWeight: 500,
                letterSpacing: '0.1rem',
              }}
              key={`route-to-${route.path}`}
            >
              {capitalize(route.name)}
            </Item>
          );
        return undefined;
      })}
    </MenuList>
  );
};

export const Menu = (): JSX.Element => {
  const menuState = useAtomValue(isMenuOpen);

  return (
    <Drawer
      variant='persistent'
      open={menuState}
      anchor='right'
      PaperProps={{
        sx: {
          width: { xs: '100vw', lg: menuWidth },
          backgroundColor: 'white',
          color: red[900],
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          paddingTop: { xs: '5rem', lg: '3rem' },
          fontSize: '1.4rem',
        },
      }}
    >
      <MenuItem />
    </Drawer>
  );
};
