import { Squash } from 'hamburger-react';
import { useTheme } from '@mui/material';
import { useAtom } from 'jotai';
import { isMenuOpen } from '@store';

export const MenuButton = (): JSX.Element => {
  const [state, setState] = useAtom(isMenuOpen);
  const { primary, common } = useTheme().palette;

  return (
    <div className='menuButton'>
      <Squash
        toggled={state}
        toggle={setState}
        color={state ? primary.main : common.white}
      />
    </div>
  );
};
