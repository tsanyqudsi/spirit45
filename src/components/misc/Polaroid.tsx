import styles from '@assets/styles/custom.module.css';
import { Box, BoxProps } from '@mui/material';

interface PolaroidProps extends BoxProps {
  src: string;
  caption: string;
}

export const Polaroid = (props: PolaroidProps): JSX.Element => {
  const { children, ...attr } = props;

  return (
    <Box className={styles.polaroid} {...attr} sx={{ userSelect: 'none' }}>
      <img src={props.src} alt={props.caption} title={props.caption} />
    </Box>
  );
};
