import { styled } from '~/styles';
import { motion } from 'framer-motion';

export const ButtonMenuAni = styled(motion.button, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'none',

  background: 'none',
  border: 'none',

  '> svg': {
    '> path': {
      stroke: '$color1',
    },
  },
});
