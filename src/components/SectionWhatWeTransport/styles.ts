import { styled } from '~/styles';

export const WrapperWhatWeTransport = styled('section', {
  width: '100%',
});

export const ContentWhatWeTransport = styled('div', {
  maxWidth: '$max-grid',
  margin: '$0 auto',
  padding: '$32 $8',

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
    '> p': {
      maxWidth: '768px',
    },
  },
});

export const CardContainer = styled('div', {
  marginTop: '$24',
  width: '100%',

  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '$24',
  justifyContent: 'center',
});

export const Card = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  padding: '$32 $8',

  backgroundColor: '$color4',
  borderRadius: '$default',

  '> svg': {
    fontSize: '64px',
    color: '$color1',
  },

  '> p': {
    marginTop: '$24',
    textAlign: 'center',
    color: '$color5',
  },

  '@md': {
    width: '324px',
  },
});

export const CardTitle = styled('h3', {
  position: 'relative',
  display: 'block',

  width: 'fit-content',
  color: '$color5',
  textAlign: 'center',
  paddingBottom: '$4',

  fontSize: '$18',
  marginTop: '$24',

  '&::after': {
    content: '',
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '65%',
    height: '0.25rem',
    backgroundColor: '$color2',
  },
});
