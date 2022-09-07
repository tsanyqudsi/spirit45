import { Typography, useTheme } from '@mui/material';
import { Hero as HeroComponent, Logo } from '@components';

const IconCaption = (): JSX.Element => {
  return <Typography variant='caption'>Learn More</Typography>;
};

export const Hero = (): JSX.Element => {
  const { primary } = useTheme().palette;

  return (
    <HeroComponent
      bgColor={primary.main}
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
