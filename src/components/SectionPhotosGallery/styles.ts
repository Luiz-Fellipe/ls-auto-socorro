import { styled } from '~/styles';

export const WrapperPhotosGallery = styled('section', {
  width: '100%',
  overflowX: 'hidden',
});

export const ContentPhotosGallery = styled('div', {
  maxWidth: '$max-grid',
  margin: '$0 auto',
  padding: '$32 $8',

  '> p': {
    marginTop: '$24',
    textAlign: 'center',
  },
});
