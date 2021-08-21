import styled from 'styled-components'

import { flexbox, positionCenterY, textStyle } from 'src/styles/utils'

export const StyledFormControl = styled.input`
  ${textStyle('base')};
  display: block;
  width: 100%;
  height: 40px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.primary};
  transition: background-color 200ms ease-in-out;
  appearance: none;

  &.active {
    border-color: ${({ theme }) => theme.colors.blue};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.tertiary};
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.background};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`

export const StyledFormGroup = styled.div`
  position: relative;

  input {
    padding-left: 40px;
  }

  .icon {
    ${positionCenterY()};
    ${flexbox()};
    left: 0;
    width: 40px;
    height: 40px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.secondary};
  }
`

export const StyledSelectGroup = styled(StyledFormGroup)`
  &.active {
    select {
      border-color: ${({ theme }) => theme.colors.blue};
    }

    .icon {
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  select {
    padding-right: 40px;
    text-overflow: ellipsis;
  }

  .icon {
    ${positionCenterY()};
    right: 8px;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.tertiary};
  }
`
