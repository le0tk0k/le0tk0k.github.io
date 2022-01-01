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
})

export default customTheme
