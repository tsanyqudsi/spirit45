import { Box, Typography } from '@mui/material';
import { Polaroid, Row } from '@components';
import { grey } from '@mui/material/colors';
import ffCharacters from '@assets/images/flyingfeathers/characterConcept.jpg';
import ffCharacters1 from '@assets/images/backgroundHero.jpg';

export const FlyingFeathers = (): JSX.Element => {
  return (
    <Row bgcolor={grey[100]} id={'flyingfeathers'}>
      <Box marginY={'3rem'} textAlign='center' flexBasis={'50%'}>
        <Typography variant='h2' fontWeight={'700'} marginBottom='2rem'>
          Flying Feathers
        </Typography>
        <Polaroid
          src={[ffCharacters, ffCharacters1]}
          caption={['Character Concept', 'background']}
        />
      </Box>
      <Box flexBasis={'50%'}></Box>
    </Row>
  );
};
