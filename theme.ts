import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const customTheme = extendTheme({
  config: {},
  colors: {
    polarNight: {
      100: '#4C566A',
      200: '#434C5E',
      300: '#3B4252',
      400: '#2E3440',
    },
    snowStorm: {
      100: '#ECEFF4',
      200: '#E5E9F0',
      300: '#D8DEE9',
    },
    frost: {
      100: '#8FBCBB',
      200: '#88C0D0',
      300: '#81A1C1',
      400: '#5E81AC',
    },
    aurora: {
      100: '#BF616A',
      200: '#D08770',
      300: '#EBCB8B',
      400: '#A3BE8C',
      500: '#B48EAD',
    },
  },
  styles: {
    global: (props) => ({
      body: {
        color: mode('polarNight.100', 'snowStorm.100')(props),
        bg: mode('white', 'polarNight.400')(props),
      },
    }),
  },
  mdx: {
    title: {
      mb: '.3rem',
      pb: '.5rem',
      color: 'aurora.200',
      fontWeight: 'extrabold',
      fontSize: '1.5rem',
      borderBottomStyle: 'dashed',
      borderBottomWidth: '1px',
      borderBottomColor: 'aurora.200',
    },
    h1: {
      mt: '2.5rem',
      mb: '1rem',
      fontWeight: 'bold',
      fontSize: '1.4rem',
    },
    h2: {
      mt: '2.5rem',
      mb: '1rem',
      fontWeight: 'semibold',
      fontSize: '1.3rem',
    },
    h3: {
      mt: '2.5rem',
      mb: '1rem',
      fontWeight: 'semibold',
      fontSize: '1.2rem',
    },
    p: {
      mt: '1.25rem',
      lineHeight: 1.6,
      'blockquote &': {
        mt: 0,
      },
    },
    a: {
      color: 'aurora.200',
      borderBottomStyle: 'dashed',
      borderBottomWidth: '1px',
      borderBottomColor: 'aurora.200',
    },
    hr: {
      bg: 'aurora.200',
      my: '4rem',
    },
    ul: {
      mt: '1.25rem',
      ml: '1.25rem',
      'li &': {
        mt: 0,
      },
      'blockquote &': {
        mt: 0,
      },
    },
    blockquote: {
      borderLeftWidth: '3px',
      borderLeftColor: 'aurora.200',
      px: '1.25rem',
      py: '1rem',
      my: '1.25rem',
    },
    code: {
      color: 'aurora.200',
      bg: 'rgb(208, 135, 112, 0.15)',
      px: '1',
      whiteSpace: 'nowrap',
    },
  },
})

export default customTheme
