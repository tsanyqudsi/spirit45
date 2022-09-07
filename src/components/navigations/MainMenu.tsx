import { useTheme, Drawer, MenuList, MenuItem as Item } from '@mui/material';
import { capitalize } from 'lodash';
import { useAtomValue } from 'jotai';
import { isMenuOpen } from '@store';

import { getSortedRoutes } from '@libs/getSortedRoutes';
import { isPathIncluded } from '@libs/isPathIncluded';
import { menuWidth } from '@constants/layouts';
import { main } from '@constants/hideMenu';

const sortedRoutes = getSortedRoutes();

const MenuItem = (): JSX.Element => {
  return (
    <MenuList
      sx={{
        width: '100%',
      }}
    >
      {sortedRoutes.map((route): JSX.Element | undefined => {
        if (
          route.path !== undefined &&
          isPathIncluded(route.path, main).length === 0
        )
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

export const MainMenu = (): JSX.Element => {
  const menuState = useAtomValue(isMenuOpen);
  const { primary, common } = useTheme().palette;

  return (
    <Drawer
      variant='persistent'
      open={menuState}
      anchor='right'
      PaperProps={{
        sx: {
          width: { xs: '100vw', lg: menuWidth },
          backgroundColor: common.white,
          color: primary.main,
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
