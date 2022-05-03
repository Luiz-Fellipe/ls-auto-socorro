import { styled } from '~/styles';

export const TitleContainer = styled('h2', {
  position: 'relative',
  display: 'block',

  width: 'fit-content',
  color: '$color5',
  textAlign: 'center',
  paddingBottom: '$4',

  margin: '$0 auto',

  fontSize: '$24',

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
