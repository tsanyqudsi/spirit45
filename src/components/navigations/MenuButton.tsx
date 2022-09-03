import * as React from 'react';
import { Squash } from 'hamburger-react';
import { useAtom } from 'jotai';
import { isMenuOpen } from '@store';
import { red } from '@mui/material/colors';

export const MenuButton = (): JSX.Element => {
  const [state, setState] = useAtom(isMenuOpen);

  return (
    <div className='menuButton'>
      <Squash
        toggled={state}
        toggle={setState}
        color={state ? red[900] : 'white'}
      />
    </div>
  );
};
