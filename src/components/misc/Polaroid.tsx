import * as React from 'react';
import { Box, BoxProps, IconButton } from '@mui/material';
import { random } from 'lodash';
import styles from '@assets/styles/custom.module.css';

import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { CloseFullscreen } from '@mui/icons-material';

interface PolaroidProps extends BoxProps {
  src: string[];
  caption: string[];
}

interface PolaroidWrapperProps extends BoxProps {
  caption: string;
  children: React.ReactNode;
}

const PolaroidWrapper = (props: PolaroidWrapperProps): JSX.Element => {
  const { children, ...attr } = props;
  return <Box {...attr}>{children}</Box>;
};

export const Polaroid = (props: PolaroidProps): JSX.Element => {
  const [isGalleryShown, ShowGallery] = React.useState<boolean>(false);
  const { children, src, caption, ...attr } = props;

  React.useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        event.preventDefault();

        // 👇️ your logic here
        ShowGallery(false);
      }
    };
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  if (isGalleryShown)
    return (
      <Carousel
        images={src.map((image) => {
          return {
            src: image,
          };
        })}
        isMaximized
        hasThumbnails={false}
        hasMediaButtonAtMax={false}
        minIcon={
          <IconButton onClick={() => ShowGallery(false)}>
            <CloseFullscreen />
          </IconButton>
        }
      />
    );

  return (
    <div
      style={{
        position: 'relative',
        height: '34rem',
        zIndex: 0,
        marginTop: '2rem',
      }}
      onClick={() => ShowGallery(true)}
    >
      {src.map((value: string, index: number) => {
        return (
          <PolaroidWrapper
            className={styles.polaroid}
            {...attr}
            caption={caption[index]}
            sx={{
              userSelect: 'none',
              transform: `rotate(${
                random(index * 20) + random(20)
              }deg) translate(${random(index * 29)}%, 1%)	`,
              zIndex: index,
              position: 'absolute',
              top: 0,
              left: '2rem',
            }}
            key={`${caption[index]}-${index}`}
          >
            <img src={value} alt={caption[index]} title={caption[index]} />
          </PolaroidWrapper>
        );
      })}
    </div>
  );
};
