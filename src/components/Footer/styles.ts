import { styled } from '~/styles';

export const WrapperFooter = styled('footer', {
  position: 'relative',
  backgroundColor: '$color1',

  minHeight: '205px',

  marginTop: '4rem',

  display: 'flex',
  flexDirection: 'column',

  '> nav': {
    width: '100%',
    margin: '4rem $0 $24 $0',

    '> ul': {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '$4',

      '> li': {
        '> a': {
          textDecoration: 'none',
          color: '$color0',
          fontSize: '$14',
          fontWeight: 'bold',

          transition: 'color 0.2s ease-out',

          '&:hover': {
            color: '$color2',
          },
        },
      },
    },
  },
  '> span': {
    width: '100%',
    textAlign: 'center',
    fontSize: '$12',
    color: '$color0',

    '&:last-child': {
      marginBottom: '$24',
    },
  },

  '@md': {
    marginTop: '4.5rem',

    '> nav': {
      margin: '4.5rem $0 $32 $0',

      display: 'flex',
      justifyContent: 'center',

      '> ul': {
        flexDirection: 'row',
        gap: '$24',

        '> li': {
          '> a': {
            fontSize: '$16',
          },
        },
      },
    },

    '> span': {
      fontSize: '$14',
    },
  },
});

export const LogoContainer = styled('div', {
  position: 'absolute',
  left: '50%',
  top: '-40px',
  transform: 'translateX(-50%)',

  width: '85px',
  height: '85px',
  backgroundColor: '$color0',
  borderRadius: '$full',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
