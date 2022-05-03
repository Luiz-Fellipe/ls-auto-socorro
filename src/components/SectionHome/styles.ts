import { styled } from '~/styles';

export const WrapperHome = styled('section', {
  width: '100%',
});

export const ContentHome = styled('div', {
  width: '100%',

  backgroundImage: "url('/images/background.png')",

  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',

  minHeight: '50vh',

  display: 'grid',
  placeItems: 'center',

  '@md': {
    minHeight: '80vh',
  },
});

export const BodyHome = styled('div', {
  maxWidth: '$max-grid',
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  padding: '$32 $8',

  '> h1': {
    fontSize: '$32',
    lineHeight: '$48',

    color: '$color0',
    textAlign: 'center',

    '> span': {
      color: '$color3',
    },
  },

  '> p': {
    marginTop: '$24',

    color: '$color0',
    textAlign: 'center',
  },

  '> button': {
    marginTop: '$24',

    width: 'fit-content',
    backgroundColor: '$color2',
    borderRadius: '$default',
    boxShadow: '0px 5.55556px 5.55556px rgba(0, 0, 0, 0.25)',
    padding: '$12 $24',

    fontWeight: '$semi-bold',
    fontSize: '$16',
    color: '$color0',
  },

  '> div': {
    backgroundColor: '$color1',
  },

  '@md': {
    '> h1': {
      fontSize: '4.5rem',
      lineHeight: '7.5rem',
      maxWidth: '830px',
    },

    '> p': {
      fontSize: '$18',
      maxWidth: '540px',
    },

    '> button': {
      marginTop: '$48',
    },
  },
});

export const FooterHome = styled('div', {
  width: '100%',
  height: '45px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: '$color1',

  '> a': {
    display: 'inline-block',
    color: '$color3',
    fontWeight: '$semi-bold',
    marginRight: '$8',

    textDecoration: 'none',
  },
});
