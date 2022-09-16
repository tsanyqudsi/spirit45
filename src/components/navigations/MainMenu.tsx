import { useTheme, Drawer } from '@mui/material';
import { getSortedRoutes } from '@libs/getSortedRoutes';

import { useAtomValue } from 'jotai';
import { menuWidth, isMenuOpenAtom } from '@store';
import { MenuItem } from './parts/MenuItem';

export const MainMenu = (): JSX.Element => {
  const menuState = useAtomValue(isMenuOpenAtom);
  const { primary, common } = useTheme().palette;
  const sortedRoutes = getSortedRoutes();

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
      <MenuItem
        routes={sortedRoutes}
        checkers={['policies', 'careers', 'games']}
        isExcluded={true}
      />
      {/* <MenuItem
        routes={sortedRoutes}
        checkers={['policies']}
        colors={grey[400]}
      /> */}
    </Drawer>
  );
};
