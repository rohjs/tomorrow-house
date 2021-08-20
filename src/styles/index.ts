import { DefaultTheme } from 'styled-components'

const breakpoints = {
  tablet: '768px',
  desktop: '1200px',
}

const fontFamilies = {
  main: 'Noto Sans KR, sans-serif',
  price: 'Tahoma, sans-serif',
}

const fontSizes = {
  xxs: '12px',
  xs: '13px',
  sm: '14px',
  base: '16px',
  md: '18px',
  lg: '24px',
}

const lineHeights = {
  xxs: '16px',
  xs: '20px',
  sm: '24px',
  base: '24px',
  md: '28px',
  lg: '34px',
}

const letterSpacings = {
  xxs: '-0.005em',
  xs: '-0.01em',
  sm: '-0.01em',
  base: '-0.01em',
  md: '-0.02em',
  lg: '-0.01em',
}

const colors = {
  black: '#000',
  dark: '#191a20',
  primary: '#3f4150',
  secondary: '#8c8d96',
  tertiary: '#b2b3b9',
  border: '#e0e2e7',
  background: '#f7f8fa',
  white: '#fff',
  blue: '#3da5f5',
  blueDark: '#3186c4',
  blueLight: '#ecf6fe',
  red: '#f86d7d',
  green: '#22c58b',
}

const levels = {
  overlay: 100,
  sidebar: 200,
}

export const gutter = '10px'

export const theme: DefaultTheme = {
  breakpoints,
  colors,
  fontFamilies,
  fontSizes,
  gutter,
  lineHeights,
  letterSpacings,
  levels,
}
