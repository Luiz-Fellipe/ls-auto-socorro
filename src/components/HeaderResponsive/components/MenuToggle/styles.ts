import { styled } from '~/styles';
import { motion } from 'framer-motion';

export const ButtonMenuAni = styled(motion.button, {
  display: {
    '@initial': 'flex',
    '@sm': 'none',
  },
  justifyContent: 'center',
  alignItems: 'center',

  background: 'none',
  border: 'none',

  '> svg': {
    '> path': {
      stroke: '$primary',
    },
  },
});
