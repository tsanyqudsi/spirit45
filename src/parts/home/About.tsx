import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { DisplayCard, Row } from '@components';
import { scrollTo } from '@libs/scrollTo';

const Proclamation = (): JSX.Element => {
  return (
    <DisplayCard
      useCardPadding
      buttonText='Join Us'
      buttonColor='secondary'
      flexBasis={'50%'}
      onClick={() => scrollTo({ id: 'shoutout', ref: null })}
    >
      <Typography
        variant='h2'
        fontSize={['3rem', '4rem']}
        textAlign='center'
        fontWeight='700'
        marginBottom='3rem'
        color={grey[800]}
      >
        Proclamation
      </Typography>
      <Box>
        <Typography variant='body1' fontSize='1.2rem' marginBottom='1rem'>
          We do hereby declare our own game team.
        </Typography>
        <Typography variant='body1' fontSize='1.2rem'>
          Matters concerning the development of games, etc., will be carried out
          in a conscientious manner and as fun as possible.
        </Typography>
      </Box>
      <Box textAlign='right' width={'100%'} marginTop='3rem'>
        <Typography variant='body1' fontSize='1.1rem'>
          Jakarta, Day 17 Month 8 Year 2022.
        </Typography>
        <Typography
          variant='body1'
          fontSize='1.1rem'
          marginTop='2rem'
          fontWeight={'600'}
        >
          Spirit45
        </Typography>
      </Box>
    </DisplayCard>
  );
};

export const About = (): JSX.Element => {
  return (
    <Row minHeight='50vh' id={'about'}>
      <Proclamation />
    </Row>
  );
};
