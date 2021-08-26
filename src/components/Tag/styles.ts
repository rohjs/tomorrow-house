import styled, { css } from 'styled-components'

import { inlineFlexbox, textStyle } from 'src/styles/utils'
import { TagColor, TagProps } from './index'

type StyledTagProps = Pick<TagProps, 'color'>

const tagRed = css`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.red};
`

const tagGreen = css`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.green};
`

const tagGray = css`
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.border};
`

function getTagColor(color?: TagColor) {
  switch (color) {
    case 'red':
      return tagRed
    case 'green':
      return tagGreen
    case 'gray':
      return tagGray
    default:
      return tagGray
  }
}

export const StyledTag = styled.strong<StyledTagProps>`
  ${inlineFlexbox()};
  ${textStyle('xxs')};
  flex-grow: 0;
  flex-shrink: 0;
  height: 20px;
  padding: 0 6px;
  font-weight: 700;
  border-radius: 4px;
  white-space: nowrap;

  ${({ color }) => getTagColor(color)};
`
