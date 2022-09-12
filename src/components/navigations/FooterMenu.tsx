import { MenuItem } from './parts/MenuItem';
import { getSortedRoutes } from '@libs/getSortedRoutes';
import { common } from '@mui/material/colors';

export const FooterMenu = (): JSX.Element => {
  const sortedRoutes = getSortedRoutes();

  return (
    <MenuItem
      routes={sortedRoutes}
      checkers={['policies']}
      colors={common.white}
    />
  );
};
