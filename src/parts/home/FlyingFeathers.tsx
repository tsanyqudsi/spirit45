import { Box, Typography } from '@mui/material';
import { Polaroid, Row } from '@components';
import { green } from '@mui/material/colors';
import ffCharacters from '@assets/images/FlyingFeathers.jpeg';

export const FlyingFeathers = (): JSX.Element => {
  return (
    <Row bgcolor={green[100]}>
      <Box marginY={'3rem'} textAlign='center'>
        <Typography variant='h2' fontWeight={'700'} marginBottom='2rem'>
          Flying Feathers
        </Typography>
        <Polaroid src={ffCharacters} caption='Character Concept' />
      </Box>
    </Row>
  );
};
