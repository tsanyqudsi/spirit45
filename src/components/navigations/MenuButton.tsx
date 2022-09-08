import * as React from 'react';
import { Squash } from 'hamburger-react';
import { useTheme } from '@mui/material';
import { useAtom } from 'jotai';
import { isMenuOpen } from '@store';
import { getColor } from '@libs/getColor';

export const MenuButton = (): JSX.Element => {
  const [state, setState] = useAtom(isMenuOpen);
  const [color, setColor] = React.useState<string>('');
  const { primary } = useTheme().palette;

  const [scrolling, setScrolling] = React.useState<number>(0);

  React.useEffect(() => {
    const onScroll = (event: Event): void => {
      const target = event.target as Document;
      setScrolling(target?.documentElement.scrollTop);
    };

    window.addEventListener('scroll', onScroll);
    setColor(getColor());
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrolling]);

  return (
    <div className='menuButton'>
      <Squash
        toggled={state}
        toggle={setState}
        color={state ? primary.main : color}
        distance='lg'
        rounded
      />
    </div>
  );
};
