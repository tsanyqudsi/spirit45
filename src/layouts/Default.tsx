import { Box, useTheme } from '@mui/material';
import { useAtomValue } from 'jotai';
import { isMenuOpenAtom, menuWidth } from '@store';
import { Footer } from '@components';

interface DefaultProps {
  children: React.ReactNode;
}

export const Default = (props: DefaultProps): JSX.Element => {
  const menuIsOpen = useAtomValue(isMenuOpenAtom);

  const theme = useTheme();

  return (
    <Box
      marginRight={menuIsOpen ? menuWidth : 0}
      marginLeft={menuIsOpen ? `-${menuWidth}` : 0}
      sx={{
        transition: theme.transitions.create(
          ['margin-right', 'margin-left', 'transform'],
          {
            duration: theme.transitions.duration.standard,
            delay: menuIsOpen ? 3 : -10,
          }
        ),
      }}
    >
      {props.children}
      <Footer />
    </Box>
  );
};
