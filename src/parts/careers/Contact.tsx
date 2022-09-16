import { Typography } from '@mui/material';
import { MailTo, Row } from '@components';

export const Contact = (): JSX.Element => {
  return (
    <Row id={'interested'} marginY={'4rem'} alignItems={'center'}>
      <Typography fontSize={['1.2rem', '2rem']} textAlign='center'>
        Interested ? Send your CV to
        <MailTo
          margin={'0.6rem'}
          email={'heroes@spirit45.io'}
          subject={'Joining Spirit45 - Unity Programmer'}
        />
      </Typography>
    </Row>
  );
};
