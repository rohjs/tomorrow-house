import React, { ReactNode } from 'react'
import { StyledContainer } from './styles'

interface ContainerProps {
  children?: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>
}
