import styles from '@assets/styles/custom.module.css';
import { Box, BoxProps } from '@mui/material';
import { random } from 'lodash';

interface PolaroidProps extends BoxProps {
  src: string[];
  caption: string;
}

export const Polaroid = (props: PolaroidProps): JSX.Element => {
  const { children, src, ...attr } = props;

  return (
    <div style={{ position: 'relative', height: '40vh' }}>
      {props.src.map((value: string, index: number) => {
        return (
          <Box
            className={styles.polaroid}
            {...attr}
            sx={{
              userSelect: 'none',
              transform: `rotate(${random(index * 20)}deg)`,
              zIndex: index,
              position: 'absolute',
              top: 0,
            }}
            key={`${props.caption}-${index}`}
          >
            <img src={value} alt={props.caption} title={props.caption} />
          </Box>
        );
      })}
    </div>
  );
};
