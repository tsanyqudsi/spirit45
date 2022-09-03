import * as React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MenuButton, Menu } from './components';
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
            standard: 1000,
            enteringScreen: 1000,
            leavingScreen: 1000,
          },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<p>Loading...</p>}>
        <MenuButton />
        <Menu />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </React.Suspense>
    </ThemeProvider>
  );
};
