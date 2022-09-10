import { Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { DisplayCard, Row } from '@components';

export const Career = (): JSX.Element => {
  return (
    <Row minHeight='50vh' id={'career'}>
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
          Join The Journey
        </Typography>
        <Typography variant='body1' fontSize='1.2rem' marginBottom='1rem'>
          Don’t be shy - we’re always on the lookout for talented people to join
          in on the fun. Whether you are rocking skills in anything from
          programming to Subway Surfing, let us know what you’ve got!
        </Typography>
      </DisplayCard>
    </Row>
  );
};
