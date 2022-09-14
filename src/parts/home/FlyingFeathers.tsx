import { Box, Typography } from '@mui/material';
import { Row } from '@components';
import { grey } from '@mui/material/colors';

export const FlyingFeathers = (): JSX.Element => {
  return (
    <Row bgcolor={grey[100]} id={'flyingfeathers'}>
      <Box marginY={'3rem'} textAlign='center' flexBasis={'50%'}>
        <Typography variant='h2' fontWeight={'700'} marginBottom='2rem'>
          Current Project
        </Typography>
        <Typography fontWeight={'700'} marginBottom='2rem'>
          Flying Feathers
        </Typography>
        {/* <Polaroid
          src={[ffCharacters, ffCharacters1]}
          caption={['Character Concept', 'background']}
        /> */}
      </Box>
    </Row>
  );
};
