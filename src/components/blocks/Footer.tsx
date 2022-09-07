import { Row, Logo } from '@components';
import { Box, Typography, useTheme } from '@mui/material';

export const Footer = (): JSX.Element => {
  const { secondary, common } = useTheme().palette;

  return (
    <Row bgcolor={secondary.main} paddingY='1rem' paddingX='5rem'>
      <Box
        color={common.white}
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
