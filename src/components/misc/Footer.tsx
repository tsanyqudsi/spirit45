import * as React from 'react';
import { Row, Logo } from '@components';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

export const Footer = (): JSX.Element => {
  return (
    <Row bgcolor={'rgba(229, 140, 0, 1)'} paddingY='1rem'>
      <Box
        color='white'
        display={'flex'}
        flexDirection={'column'}
        alignItems={'space-between'}
      >
        <Logo fontSize={'3rem'} />
        <Typography>© Copyright · 2022</Typography>
      </Box>
      <Box>Links</Box>
    </Row>
  );
};
