import * as React from 'react';
import { red } from '@mui/material/colors';
import { Typography } from '@mui/material';
import { Hero as HeroComponent, Logo } from '@components';

const IconCaption = (): JSX.Element => {
  return <Typography variant='caption'>Learn More</Typography>;
};

export const Hero = (): JSX.Element => {
  return (
    <HeroComponent
      bgColor={red[900]}
      color='white'
      iconCaption={<IconCaption />}
    >
      <div>
        <Logo variant='h1' fontSize={'8rem'} />
        <Typography variant='subtitle1'>
          We&#39;re a newbie game studio in Indonesia striving to weave good and
          fun experiences.
        </Typography>
      </div>
    </HeroComponent>
  );
};
