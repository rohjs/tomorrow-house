import { generateMedia } from 'styled-media-query'
import { theme } from '../index'

export const media = generateMedia({
  ...theme.breakpoints,
})
