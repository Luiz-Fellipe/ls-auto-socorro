import { styled } from '~/styles';

export const WrapperContactUs = styled('section', {
  width: '100%',
});

export const ContentContactUs = styled('div', {
  maxWidth: '560px',
  padding: '$24 $8',
  margin: '$0 auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  color: '$color5',

  '> span': {
    textAlign: 'center',
    padding: '$24',
  },

  '@md': {
    padding: '$32 $8',

    '> span': {
      padding: '$32',
    },
  },
});

export const SocialMediaContainer = styled('div', {
  paddingTop: '$24',
  '> a': {
    '> svg': {
      fontSize: '$48',
      color: '$color1',
    },
  },

  '@md': {
    paddingTop: '$32',
  },
});

export const PhonesContainer = styled('div', {
  padding: '$24',
  color: '$color5',

  display: 'flex',
  flexDirection: 'column',

  '> a': {
    color: '$color5',
    textDecoration: 'none',

    '> svg': {
      marginLeft: '$8',
      fontSize: '$24',
      color: '$color1',
    },

    '&:last-child': {
      display: 'inline-block',
      marginTop: '$8',
    },
  },

  '@md': {
    paddingTop: '$32',
  },
});
