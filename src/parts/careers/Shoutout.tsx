import { Typography } from '@mui/material';
import { Row } from '@components';

export const Shoutout = (): JSX.Element => {
  return (
    <Row id={'shoutout'} marginY={'4rem'} flexDirection={'column'}>
      <Typography variant='h2' textAlign={'center'} fontWeight={'600'}>
        Join us!
      </Typography>
      <Typography textAlign={'center'} fontSize={'1.5rem'}>
        We are always looking for the right crew that wants to join our journey
        and love games as much as we do.
      </Typography>
    </Row>
  );
};
