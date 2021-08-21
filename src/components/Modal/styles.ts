import styled from 'styled-components'

import { animations } from 'src/styles/utils'

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.levels.overlay};
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: 0.7;
  animation: ${animations.fadeIn70} 300ms ease-in-out;
`
