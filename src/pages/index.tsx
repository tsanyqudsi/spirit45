import * as React from 'react';
import { Default } from '@layouts/Default';
import { Hero } from '@components';
import { Typography } from '@mui/material';
import { red } from '@mui/material/colors';

const IconCaption = (): JSX.Element => {
  return <Typography variant='caption'>Learn More</Typography>;
};

const Index = (): JSX.Element => {
  return (
    <Default>
      <Hero bgColor={red[900]} color='white' iconCaption={<IconCaption />}>
        <Typography variant='h1' fontFamily={'Montserrat, sans-serif'}>
          SPIRIT45
        </Typography>
      </Hero>
    </Default>
  );
};

export default Index;
