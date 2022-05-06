import { createStitches, ScaleValue } from '@stitches/react';

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      color0: '#FFFAFA',
      color1: '#003049',
      color2: '#C1121F',
      color3: '#FDF0D5',
      color4: '#F5F5F5',
      color5: '#333333',
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
      '40': '2.5rem',
      '48': '3rem',
      '56': '3.5rem',
      '64': '4rem',
    },
    radii: {
      full: `99999px`,
      default: `5px`,
    },
    fonts: {
      default: `Poppins, sans-serif`,
    },
    fontSizes: {
      '8': `0.5rem`,
      '12': `0.75rem`,
      '14': `0.875rem`,
      '16': `1rem`,
      '18': '1.125rem',
      '24': `1.5rem`,
      '32': `2rem`,
      '48': `2.5rem`,
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
      '48': '3rem',
    },

    sizes: {
      'max-grid': '1140px',
    },
  },
  media: {
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xxlg: '(min-width: 1400px)',
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
