import { motion } from 'framer-motion';
import { styled } from '~/styles';

export const WrapperPhotosSlider = styled('div', {
  width: '100%',
  marginTop: '$24',
});

export const PhotoContainer = styled('div', {
  position: 'relative',

  width: '100%',
  height: '250px',

  margin: '$0 auto',

  '@md': {
    width: '80%',
    height: '60vh',
  },
});

export const ImgContainerAni = styled(motion.div, {
  display: 'block',
  position: 'relative',

  backgroundColor: '$color4',

  objectFit: 'contain',

  borderRadius: '$default',

  '> span': {
    pointerEvents: 'none',
    borderRadius: '$default',
  },
  width: '100%',
  height: '100%',
});

export const ArrowCard = styled('button', {
  width: '25px',
  height: '25px',
  zIndex: '2',
  border: 'none',

  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: '$color2',
  borderRadius: '50%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '> svg': {
    fontSize: '0.75rem',
    color: '$color3',
  },

  '&.left': {
    left: '-12.5px',
  },

  '&.right': {
    right: '-12.5px',
  },

  '@md': {
    width: '46px',
    height: '46px',

    '> svg': {
      fontSize: '$18',
      color: '$color3',
    },

    '&.left': {
      left: '-23px',
    },

    '&.right': {
      right: '-23px',
    },
  },
});

export const GalleryContainer = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '$8',

  margin: '$12 auto auto auto',

  justifyContent: 'center',

  '@md': {
    width: '80%',
  },
});

export const GalleryItem = styled('button', {
  position: 'relative',
  width: '60px',
  height: '60px',

  borderRadius: '$default',

  '> span': {
    borderRadius: '$default',
  },

  variants: {
    isActive: {
      true: {
        outline: '2px solid $color2',
      },
    },
  },

  '@md': {
    width: '80px',
    height: '80px',
  },
});
