import * as React from 'react';
import { Box, IconButton } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useScrollBy } from 'react-use-window-scroll';
import useWindowDimensions from '@libs/useWindowDimensions';

interface HeroProps {
  children: React.ReactNode;
  bgColor: string;
  color?: string;
  banner?: React.ReactNode;
  iconCaption?: React.ReactNode;
}

export const Hero = (props: HeroProps): JSX.Element => {
  const scrollBy = useScrollBy();
  const dimension = useWindowDimensions();
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
      <Box
        marginBottom='1.2rem'
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        {props.iconCaption}
        <div>
          <IconButton
            sx={{
              border: '2px solid rgba(255,255,255,0.8)',
            }}
            onClick={() =>
              scrollBy({
                top: dimension.height ?? 500,
                left: 0,
                behavior: 'smooth',
              })
            }
          >
            <ExpandMore />
          </IconButton>
        </div>
      </Box>
    </Box>
  );
};
