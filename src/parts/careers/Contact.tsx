import { Typography } from '@mui/material';
import { MailTo, Row } from '@components';

export const Contact = (): JSX.Element => {
  return (
    <Row
      id={'interested'}
      marginY={'4rem'}
      flexDirection={'column'}
      alignItems={'center'}
    >
      <Typography fontSize={'2rem'}>
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
