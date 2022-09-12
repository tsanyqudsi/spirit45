import { isPathIncluded } from '@libs/isPathIncluded';
import { Link as RouterLink } from 'react-router-dom';
import { MenuList, MenuItem as Item, Link } from '@mui/material';
import { capitalize } from 'lodash';
import { sp45_RouteObject } from '@typings';

interface MenuItemProps {
  routes: sp45_RouteObject[];
  checkers: string[];
  isExcluded?: boolean;
  useChildren?: boolean;
  colors?: string;
}

const getMenuItems = (params: MenuItemProps): React.ReactNode => {
  return params.routes.map((route) => {
    if (
      route.name !== undefined &&
      isPathIncluded(route.path, params.checkers, params.isExcluded).length ===
        0
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
          color={params.colors}
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
    return null;
  });
};

export const MenuItem = (props: MenuItemProps): JSX.Element => {
  const { isExcluded = false, useChildren = false, ...attr } = props;
  return (
    <MenuList
      sx={{
        width: '100%',
      }}
    >
      {getMenuItems({
        routes: attr.routes,
        isExcluded,
        useChildren,
        checkers: attr.checkers,
        colors: attr.colors,
      })}
    </MenuList>
  );
};
