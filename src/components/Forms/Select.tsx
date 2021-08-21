import React, { ChangeEvent, FocusEvent, MouseEvent } from 'react'

import { CaretIcon } from 'src/assets/images'
import { StyledFormControl, StyledSelectGroup } from './styles'

interface SelectProps {
  id: string
  options: SelectOption[]
  className?: string
  disabled?: boolean
  multiple?: boolean
  name?: string
  required?: boolean
  value?: string
  onBlur?: (e: FocusEvent<HTMLSelectElement>) => void
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
  onClick?: (e: MouseEvent<HTMLSelectElement>) => void
  onFocus?: (e: FocusEvent<HTMLSelectElement>) => void
}

export const Select: React.FC<SelectProps> = ({
  id,
  options,
  className,
  disabled,
  multiple,
  name,
  required,
  value,
  onBlur,
  onChange,
  onClick,
  onFocus,
}) => {
  if (!options.length) return null

  return (
    <StyledSelectGroup>
      <StyledFormControl
        as="select"
        className={className}
        defaultValue={value}
        disabled={disabled}
        multiple={multiple}
        id={id}
        name={name}
        required={required}
        onBlur={onBlur}
        onChange={onChange}
        onClick={onClick}
        onFocus={onFocus}
      >
        {options.map((option, i) => {
          const key = `${option.value}-${id}-${i}`
          console.log(value === String(option.value))

          return (
            <option value={option.value} key={key} disabled={option.disabled}>
              {option.label}
            </option>
          )
        })}
      </StyledFormControl>
      <CaretIcon className="icon" />
    </StyledSelectGroup>
  )
}
