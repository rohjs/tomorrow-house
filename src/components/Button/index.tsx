import React, { forwardRef, ReactNode, RefObject } from 'react'
import { Link } from 'react-router-dom'
import { StyledButton } from './styles'

export type ButtonSize = 32 | 40 | 48 | 55
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outlined'

interface ButtonProps {
  variant: ButtonVariant
  children?: ReactNode
  className?: string
  disabled?: boolean
  size?: ButtonSize
  to?: string
  type?: 'button' | 'submit' | 'reset'
  onBlur?: () => void
  onClick?: () => void
  onFocus?: () => void
}

type ButtonElement = HTMLButtonElement | HTMLAnchorElement

export const Button = forwardRef<ButtonElement, ButtonProps>(
  (
    {
      variant,
      children,
      className,
      disabled,
      size = 40,
      to,
      type = 'button',
      onBlur,
      onClick,
      onFocus,
    },
    ref
  ) => {
    if (to) {
      return (
        <StyledButton
          ref={ref as RefObject<HTMLAnchorElement>}
          size={size}
          variant={variant}
          onBlur={onBlur}
          onClick={onClick}
          onFocus={onFocus}
          as={Link}
          to={to}
          className={className}
        >
          {children}
        </StyledButton>
      )
    }

    return (
      <StyledButton
        ref={ref as RefObject<HTMLButtonElement>}
        size={size}
        variant={variant}
        type={type}
        disabled={disabled}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
        className={className}
      >
        {children}
      </StyledButton>
    )
  }
)
