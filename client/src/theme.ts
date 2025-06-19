import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#e6f7ff',
      100: '#b3e0ff',
      200: '#80c9ff',
      300: '#4db3ff',
      400: '#1a9cff',
      500: '#0086e6',
      600: '#0069b3',
      700: '#004c80',
      800: '#00304d',
      900: '#00131a',
    },
    accent: {
      50: '#fff5e6',
      100: '#ffdbb3',
      200: '#ffc180',
      300: '#ffa74d',
      400: '#ff8d1a',
      500: '#e67300',
      600: '#b35900',
      700: '#804000',
      800: '#4d2600',
      900: '#1a0d00',
    },
  },
  fonts: {
    heading: '"Inter", sans-serif',
    body: '"Inter", sans-serif',
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'semibold',
        borderRadius: 'md',
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
        outline: {
          border: '2px solid',
          borderColor: 'brand.500',
          color: 'brand.500',
        },
        ghost: {
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
          },
        },
      },
    },
    Card: {
      baseStyle: {
        p: '6',
        borderRadius: 'lg',
        boxShadow: 'md',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800',
      },
    },
  },
});

export default theme;
