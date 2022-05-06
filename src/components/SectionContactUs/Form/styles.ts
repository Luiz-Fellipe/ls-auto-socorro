import { styled } from '~/styles';

export const FormContainer = styled('form', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  gap: '$24',

  '> button': {
    backgroundColor: '$color1',
    borderRadius: '$default',
    padding: '$8 $48',

    fontWeight: '$semi-bold',
    color: '$color0',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },

  '@md': {
    gap: '$32',
  },
});

export const InputContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '40px',
  borderRadius: '0.25rem',
  border: `1px solid $color1`,
  backgroundColor: '$color0',

  '> input': {
    position: 'relative',
    width: '100%',
    height: '40px',
    background: 'transparent',
    border: 0,
    borderRadius: '0.25rem',
    padding: '0.75rem',
    color: '$color5',

    outline: 'none',

    '&:focus + label, &:not(:placeholder-shown) + label': {
      backgroundColor: '$color0',
      transform: 'translate(0.625rem, -130%) scale(0.8)',
    },

    '&::placeholder': {
      color: 'transparent',
    },

    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      margin: '$0',
    },
  },

  '> label': {
    color: '$color5',
    position: 'absolute',

    zIndex: 0,

    top: '50%',
    left: '0',

    padding: '0 0.25rem',

    transform: 'translate(0.5rem, -50%)',
    transformOrigin: '0% 0%',

    background: 'transparent',
    pointerEvents: 'none',
    transition: 'transform 0.35s, background 0.35s',

    fontSize: '$14',
  },
});

export const TextAreaContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100px',
  borderRadius: '0.25rem',
  border: `1px solid $color1`,
  backgroundColor: '$color0',

  '> textarea': {
    position: 'relative',
    width: '100%',
    height: '100%',

    background: 'transparent',
    border: 0,
    borderRadius: '0.25rem',
    padding: '0.75rem',
    color: '$color5',

    outline: 'none',

    resize: 'none',

    '&:focus + label, &:not(:placeholder-shown) + label': {
      backgroundColor: '$color0',
      transform: 'translate(0.625rem, -58px) scale(0.8)',
    },

    '&::placeholder': {
      color: 'transparent',
    },

    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      margin: '$0',
    },
  },

  '> label': {
    color: '$color5',
    position: 'absolute',

    zIndex: 0,

    top: '50%',
    left: '0',

    padding: '0 0.25rem',

    transform: 'translate(0.5rem, -40px)',
    transformOrigin: '0% 0%',

    background: 'transparent',
    pointerEvents: 'none',
    transition: 'transform 0.35s, background 0.35s',

    fontSize: '$14',
  },
});

export const SendedMessage = styled('div', {
  width: '100%',
  height: 'fit-content',
  padding: '0.75rem',
  background: '#e6f4ea',
  borderRadius: '$default',

  color: '$color5',
  textAlign: 'center',

  marginBottom: '$24',

  '> span': {
    display: 'inline-block',
    marginTop: '0.5rem',
    fontSize: '$16',
  },
});
