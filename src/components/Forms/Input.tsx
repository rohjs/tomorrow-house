import React, {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
} from 'react'
import cx from 'classnames'

import { SearchIcon } from 'src/assets/images'
import { StyledFormControl, StyledFormGroup } from './styles'

interface InputProps {
  type: string
  value: string
  active?: boolean
  children?: ReactNode
  className?: string
  disabled?: boolean
  icon?: string
  id?: string
  name?: string
  placeholder?: string
  required?: boolean
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onClick?: (e: MouseEvent<HTMLInputElement>) => void
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void
}

function getInputIcon(icon: string) {
  switch (icon) {
    case 'search':
      return <SearchIcon className="icon" />
    default:
      return null
  }
}

export const Input: React.FC<InputProps> = ({
  type,
  value,
  active,
  children,
  className,
  disabled,
  icon,
  id,
  name,
  placeholder,
  required,
  onBlur,
  onChange,
  onClick,
  onFocus,
  onKeyPress,
}) => {
  const element = (
    <StyledFormControl
      type={type}
      value={value}
      className={cx(className, { active })}
      disabled={disabled}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      onBlur={onBlur}
      onChange={onChange}
      onClick={onClick}
      onFocus={onFocus}
      onKeyPress={onKeyPress}
    />
  )

  if (icon || children) {
    return (
      <StyledFormGroup>
        {icon && getInputIcon(icon)}
        {element}
        {children}
      </StyledFormGroup>
    )
  }

  return element
}
