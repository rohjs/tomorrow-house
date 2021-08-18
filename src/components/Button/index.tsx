import React, { forwardRef, ReactNode } from 'react'
import { StyledButton } from './styles'

export type ButtonSize = 32 | 40 | 48 | 55
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outlined'

interface ButtonProps {
  size: ButtonSize
  variant: ButtonVariant
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  children?: ReactNode
  onBlur?: () => void
  onClick?: () => void
  onFocus?: () => void
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size,
      variant,
      type = 'button',
      disabled,
      children,
      onBlur,
      onClick,
      onFocus,
    },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
        size={size}
        variant={variant}
        type={type}
        disabled={disabled}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
      >
        {children}
      </StyledButton>
    )
  }
)
