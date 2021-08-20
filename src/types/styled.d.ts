import 'styled-components'

declare module 'styled-components' {
  export type TypographyScale = 'xxs' | 'xs' | 'sm' | 'base' | 'md' | 'lg'

  export interface DefaultTheme {
    breakpoints: {
      tablet: string
      desktop: string
    }

    levels: {
      [key: string]: number
    }

    gutter: string

    colors: {
      black: string
      dark: string
      primary: string
      secondary: string
      tertiary: string
      border: string
      background: string
      white: string
      blue: string
      blueDark: string
      blueLight: string
      red: string
      green: string
    }

    fontFamilies: {
      main: string
      price: string
    }

    fontSizes: {
      xxs: string
      xs: string
      sm: string
      base: string
      lg: string
      xl: string
    }

    lineHeights: {
      xxs: string
      xs: string
      sm: string
      base: string
      lg: string
      xl: string
    }

    letterSpacings: {
      xxs: string
      xs: string
      sm: string
      base: string
      lg: string
      xl: string
    }
  }
}
