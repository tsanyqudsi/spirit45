import {
  useTheme,
  Drawer,
  MenuList,
  MenuItem as Item,
  Link,
} from '@mui/material';
import { capitalize } from 'lodash';
import { useAtomValue } from 'jotai';
import { menuWidth, main, isMenuOpenAtom } from '@store';

import { getSortedRoutes } from '@libs/getSortedRoutes';
import { isPathIncluded } from '@libs/isPathIncluded';
import { Link as RouterLink } from 'react-router-dom';

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
          route.name !== undefined &&
          isPathIncluded(route.path, main).length === 0
        ) {
          const path =
            route.name.toLowerCase() !== 'home'
              ? `/${route.name.toLowerCase()}`
              : '/';
          return (
            <Link
              component={RouterLink}
              to={path}
              key={`route-to-${route.name}`}
              sx={{
                textDecoration: 'none',
              }}
            >
              <Item
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 500,
                  letterSpacing: '0.1rem',
                }}
              >
                {capitalize(route.name)}
              </Item>
            </Link>
          );
        }
        return undefined;
      })}
    </MenuList>
  );
};

export const MainMenu = (): JSX.Element => {
  const menuState = useAtomValue(isMenuOpenAtom);
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
          borderLeft: '1px solid rgba(0,0,0,0.2)',
        },
      }}
    >
      <MenuItem />
    </Drawer>
  );
};
