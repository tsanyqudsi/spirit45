import * as React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MenuButton, Menu, Loader } from '@components';
import routes from '~react-pages';

const Routes = (): React.ReactElement | null => {
  return useRoutes(routes);
};

export const App = (): JSX.Element => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
        transitions: {
          duration: {
            standard: 950,
            enteringScreen: 950,
            leavingScreen: 950,
          },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<Loader />}>
        <MenuButton />
        <Menu />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </React.Suspense>
    </ThemeProvider>
  );
};
