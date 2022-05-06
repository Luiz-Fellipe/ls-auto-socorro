import { styled } from '~/styles';
import { motion } from 'framer-motion';

export const MyHeader = styled('header', {
  width: '100%',
  height: '116px',
  zIndex: 1,
});

export const HeaderContentAni = styled(motion.nav, {
  position: 'relative',
  maxWidth: '$max-grid',
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  margin: '$0 auto',
  padding: '$0 $16',

  '> a': {
    textDecoration: 'none',

    '> span': {
      color: '$color1',
      fontSize: '$24',
      textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
  },

  '@md': {
    '> a': {
      width: '116px',
    },
  },
});

export const NavList = styled('ul', {
  width: '100%',
  listStyle: 'none',
  padding: '$24',

  textAlign: 'center',

  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '$24',
});

export const NavItemAni = styled(motion.li, {
  gap: '$8',
  '> a': {
    position: 'relative',
    textDecoration: 'none',
    color: '$color1',
    fontSize: '$16',
    fontWeight: '$semi-bold',

    transition: 'color 0.2s ease-out',

    '&:hover': {
      color: '$color2',
    },
  },
});
