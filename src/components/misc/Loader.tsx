import * as React from 'react';
import Circle from 'react-spinners/CircleLoader';
import { red } from '@mui/material/colors';

export const Loader = (): JSX.Element => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Circle color={red[800]} size='3rem' />
      <span
        style={{
          fontSize: '0.8rem',
          fontFamily: 'Bungee, sans-serif',
          marginTop: '1rem',
          color: red[900],
        }}
      >
        Loading Website ...
      </span>
    </div>
  );
};
