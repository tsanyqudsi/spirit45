import * as React from 'react';
import { Squash } from 'hamburger-react';
import { useTheme } from '@mui/material';
import { useAtom } from 'jotai';
import { isMenuOpenAtom } from '@store';
import { getColor } from '@libs/getColor';
import { useLocation } from 'react-router';

export const MenuButton = (): JSX.Element => {
  const [state, setState] = useAtom(isMenuOpenAtom);
  const [color, setColor] = React.useState<string>('');
  const [pathName, setPathName] = React.useState<string>('');
  const { primary } = useTheme().palette;

  const [scrolling, setScrolling] = React.useState<number>(0);
  const location = useLocation();

  React.useEffect(() => {
    if (pathName !== location.pathname) {
      setPathName(location.pathname);
      setState(false);
    }
  }, [location]);

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
