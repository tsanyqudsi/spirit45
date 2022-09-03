import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
export const Proclamation = (): JSX.Element => {
  return (
    <Box paddingY='3rem' height='70vh' marginX='5rem'>
      <Typography
        variant='h2'
        textAlign='center'
        fontFamily='MontSerrat, sans-serif'
        fontWeight='700'
        marginBottom='1rem'
        color={grey[800]}
      >
        Proclamation
      </Typography>
      <Box>
        <Typography variant='body1' fontSize='1.8rem' marginBottom='1rem'>
          We&#39;re a newbie game studio in Indonesia striving to weave good and
          fun experiences.
        </Typography>
        <Typography variant='body1' fontSize='1.8rem'>
          Matters concerning the development of games, etc., will be carried out
          in a conscientious manner and as fun as possible.
        </Typography>
      </Box>
      <Box textAlign='right'>
        <Typography variant='body1' fontSize='1.5rem'>
          Jakarta, Day 17 Month 9 Year 2022.
        </Typography>
        <Typography variant='body1' fontSize='1.5rem'>
          Ai - Jon
        </Typography>
      </Box>
    </Box>
  );
};
