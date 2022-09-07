import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { DisplayCard, RowImageBox, Row } from '@components';
import image from '@assets/images/backgroundHero.jpg';

const Proclamation = (): JSX.Element => {
  return (
    <DisplayCard
      useCardPadding
      buttonText='About Us'
      buttonColor='secondary'
      flexBasis={'50%'}
    >
      <Typography
        variant='h2'
        textAlign='center'
        fontWeight='700'
        marginBottom='3rem'
        color={grey[800]}
      >
        Proclamation
      </Typography>
      <Box>
        <Typography variant='body1' fontSize='1.2rem' marginBottom='1rem'>
          We&#39;re a newbie game studio in Indonesia striving to weave good and
          fun experiences.
        </Typography>
        <Typography variant='body1' fontSize='1.2rem'>
          Matters concerning the development of games, etc., will be carried out
          in a conscientious manner and as fun as possible.
        </Typography>
      </Box>
      <Box textAlign='right' width={'100%'} marginTop='3rem'>
        <Typography variant='body1' fontSize='1.1rem'>
          Jakarta, Day 17 Month 9 Year 2022.
        </Typography>
        <Typography
          variant='body1'
          fontSize='1.1rem'
          marginTop='2rem'
          fontWeight={'600'}
        >
          SP45_
        </Typography>
      </Box>
    </DisplayCard>
  );
};

export const About = (): JSX.Element => {
  return (
    <Row minHeight='50vh'>
      <Proclamation />
      <RowImageBox src={image} flexBasis='50%' />
    </Row>
  );
};
