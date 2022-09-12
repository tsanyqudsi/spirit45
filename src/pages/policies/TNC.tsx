import { Box } from '@mui/material';
import { useLocation } from 'react-router';
import { grey } from '@mui/material/colors';
import { policies } from '@store';
import { Default } from '@layouts/Default';

const TNC = (): JSX.Element => {
  const Component = policies.filter(
    (value) => value.name === useLocation().pathname
  )[0].default;

  return (
    <Default>
      <Box bgcolor={grey[300]}>
        <Component />
      </Box>
    </Default>
  );
};

export default TNC;
