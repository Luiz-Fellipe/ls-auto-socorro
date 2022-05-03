import { styled } from '~/styles';
import { motion } from 'framer-motion';

export const MyHeader = styled('header', {
  width: '100%',
  height: '116px',
  zIndex: 1,
});

export const HeaderContentAni = styled(motion.nav, {
  width: '100%',
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
});

export const NavListAni = styled(motion.ul, {
  minWidth: '304px',
  width: '90%',

  position: 'fixed',
  left: '50%',
  top: '5rem',

  listStyle: 'none',
  padding: '$24',

  backgroundColor: '$color1',
  boxShadow: '0px 4px 4px 3000px rgba(0, 0, 0, 0.25)',
  borderRadius: '30px',

  textAlign: 'center',
});

export const NavItemAni = styled(motion.li, {
  '> a': {
    position: 'relative',

    textDecoration: 'none',
    color: '$color3',
    fontSize: '$16',
    fontWeight: '$semi-bold',
    transition: 'color 0.2s ease-out',

    '&:hover': {
      color: '$color2',
    },
  },

  '& + li': {
    margin: '$24',
  },
});
