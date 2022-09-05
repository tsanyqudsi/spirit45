import * as React from 'react';
import { Typography } from '@mui/material';
import { Hero as HeroComponent, Logo } from '@components';

const IconCaption = (): JSX.Element => {
  return <Typography variant='caption'>Learn More</Typography>;
};

export const Hero = (): JSX.Element => {
  return (
    <HeroComponent
      bgColor='rgba(220,0,43,255)'
      color='white'
      iconCaption={<IconCaption />}
    >
      <div>
        <Logo variant='h1' fontSize={'8rem'} />
        <Typography variant='subtitle1' fontSize={'1.4rem'}>
          We&#39;re a not-so-new-kids-on-the-block game studio in Indonesia
          striving to weave good and fun experiences.
        </Typography>
      </div>
    </HeroComponent>
  );
};
