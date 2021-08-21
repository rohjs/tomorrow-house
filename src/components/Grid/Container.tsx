import React, { ReactNode } from 'react'
import { StyledContainer } from './styles'

interface ContainerProps {
  children?: ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}
