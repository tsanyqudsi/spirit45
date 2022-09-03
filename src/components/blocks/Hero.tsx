import * as React from 'react';
import { Box, IconButton } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

interface HeroProps {
  children: React.ReactNode;
  bgColor: string;
  color?: string;
  banner?: React.ReactNode;
  iconCaption?: React.ReactNode;
}

export const Hero = (props: HeroProps): JSX.Element => {
  return (
    <Box
      width='full'
      bgcolor={props.bgColor}
      height='100vh'
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      alignItems='center'
      color={props.color ?? 'inherit'}
    >
      <Box>{props.banner}</Box>
      {props.children}
      <Box marginBottom='1.2rem'>
        {props.iconCaption}
        <IconButton
          sx={{
            border: '2px solid rgba(255,255,255,0.8)',
          }}
        >
          <ExpandMore />
        </IconButton>
      </Box>
    </Box>
  );
};
