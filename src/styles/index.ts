import { createStitches, ScaleValue } from '@stitches/react';

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      background: '#FFFAFA',
      primary: '#003049',
      secondary: '#C1121F',
      tertiary: '#FDF0D5',
      gray: '#E5E5E5',
      text: '#333333',
    },
    space: {
      '0': `0px`,
      '1': `1px`,
      '4': `0.25rem`,
      '8': `0.5rem`,
      '12': `0.75rem`,
      '16': `1rem`,
      '24': `1.5rem`,
      '32': `2rem`,
    },
    radii: {
      full: `99999px`,
      default: `4px`,
    },
    fonts: {
      default: `Poppins, sans-serif`,
    },
    fontSizes: {
      '12': `0.75rem`,
      '14': `0.875rem`,
      '16': `1rem`,
      '8': `0.5rem`,
      '24': `1.5rem`,
      '32': `2rem`,
    },
    fontWeights: {
      regular: '400',
      'semi-bold': '600',
    },
    lineHeights: {
      '16': '1rem',
      '20': '1.25rem',
      '24': '1.5rem',
      '32': '2rem',
      '40': '2.5rem',
    },
    media: {
      sm: '(min-width: 576px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 992px)',
      xxlg: '(min-width: 1400px)',
    },
    sizes: {
      'max-grid': '1140px',
    },
  },
  utils: {
    paddingX: (value: ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});
