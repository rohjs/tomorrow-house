import styled, { css } from 'styled-components'

import { inlineFlexbox, textStyle } from 'src/styles/utils'

import type { ButtonSize, ButtonVariant } from '.'

const primaryButtonStyle = css`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  transition: background-color 200ms ease-in-out;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.blueDark};
  }
`

const secondaryButtonStyle = css`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.border};
  transition: background-color 200ms ease-in-out;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`

const outlinedButtonStyle = css`
  color: ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.blue};
  transition: background-color 200ms ease-in-out;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.blueLight};
  }
`

const ghostButtonStyle = css`
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  transition: color 200ms ease-in-out;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`

function setButtonVariant(variant: ButtonVariant) {
  switch (variant) {
    case 'primary':
      return primaryButtonStyle
    case 'secondary':
      return secondaryButtonStyle
    case 'outlined':
      return outlinedButtonStyle
    case 'ghost':
      return ghostButtonStyle
    default:
      return primaryButtonStyle
  }
}

const button32 = css`
  ${textStyle('sm')};
  height: 32px;
`

const button40 = css`
  ${textStyle('base')};
  height: 40px;
`

const button48 = css`
  ${textStyle('base')};
  height: 48px;
`

const button55 = css`
  ${textStyle('md')};
  height: 55px;
`

function setButtonSize(size: ButtonSize) {
  switch (size) {
    case 32:
      return button32
    case 40:
      return button40
    case 48:
      return button48
    case 55:
      return button55
    default:
      return button40
  }
}

interface StyledButtonProps {
  size: ButtonSize
  variant: ButtonVariant
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${inlineFlexbox()};
  padding: 0 8px;
  font-weight: 700;
  border-radius: 4px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  svg {
    display: block;
    width: 16px;
    height: auto;
  }

  ${({ variant }) => setButtonVariant(variant)}
  ${({ size }) => setButtonSize(size)}
`
