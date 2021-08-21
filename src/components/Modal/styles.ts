import styled from 'styled-components'

import { animations, flexbox } from 'src/styles/utils'

export const StyledSearchModal = styled.aside`
  position: fixed;
  top: 0;
  z-index: ${({ theme }) => theme.levels.searchModal};
  width: 100%;
  height: 100vh;
  padding: 12px 0;
  background-color: ${({ theme }) => theme.colors.white};
  animation: ${animations.slideFromRight} 300ms ease-in-out;

  &::-webkit-scrollbar {
    display: none;
  }

  .searchModalHeader {
    margin-bottom: 20px;
  }

  .formGroup {
    ${flexbox('between')};

    .searchInput {
      flex-grow: 1;
    }

    .close {
      flex-grow: 0;
      flex-shrink: 0;
      width: 56px;
      margin-left: 8px;
    }
  }
`

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
