import { globalCss } from '~/styles';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: `none`,
    boxSizing: `border-box`,
  },
  html: {
    scrollBehavior: 'smooth',
  },
  'body, button, input, textarea': {
    fontFamily: `$default`,
  },
  button: {
    cursor: 'pointer',
  },
  body: {
    background: `$color0`,
    color: `$color5`,
  },
  '#root': {
    width: '100%',
    height: '100%',

    display: 'grid',
    placeItems: 'center',
  },
});
