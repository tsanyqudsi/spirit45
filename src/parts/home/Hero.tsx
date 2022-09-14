import { Typography, useTheme } from '@mui/material';
import { Hero as HeroComponent, Logo, Row } from '@components';

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
      <Row id='HeroHome' flexDirection={'column'}>
        <Logo variant='h1' fontSize={['4rem', '6rem', '8rem']} />
        <Typography variant='subtitle1' fontSize={['0.9rem', '1.4rem']}>
          Spirit45 is a game studio based in Indonesia. We love games! We only
          wants to create games that we love and can be enjoy by Everyone.
        </Typography>
      </Row>
    </HeroComponent>
  );
};
