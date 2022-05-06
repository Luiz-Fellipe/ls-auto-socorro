import { styled } from '~/styles';

export const WrapperAboutUs = styled('section', {
  width: '100%',
});

export const ContentAboutUs = styled('div', {
  maxWidth: '$max-grid',
  margin: '$0 auto',
  padding: '$32 $8',

  // display: 'flex',
  // flexDirection: 'column',
  // alignItems: 'center',

  '> h2': {
    marginBottom: '$32',
  },

  '> p': {
    margin: '$24 auto auto auto',
    fontSize: '$16',
    fontWeight: '$regular',
    color: '$color5',
    textAlign: 'center',

    '> strong': {
      color: '$color1',
    },
  },

  '@md': {
    padding: '$64 $8',

    '> p': {
      maxWidth: '768px',
      margin: '$32 auto auto auto',
    },
  },
});

export const ImageContainer = styled('div', {
  width: '100%',

  '@md': {
    width: '60%',
    margin: '$0 auto',
  },
});
