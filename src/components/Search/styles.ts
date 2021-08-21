import styled from 'styled-components'

import { flexbox, media, textStyle } from 'src/styles/utils'

const DELETE_BTN_SIZE = `32px`

export const StyledSearchHistory = styled.section`
  .searchHistoryHeader {
    ${flexbox('between')};
    margin-bottom: 8px;

    .title,
    button {
      ${textStyle('xs')};
      font-weight: 400;
      color: ${({ theme }) => theme.colors.secondary};
    }

    button:active {
      opacity: 0.4;
    }
  }

  .searchHistoryContent {
    .placeholder {
      ${flexbox('start')};
      ${textStyle('base')};
      width: 100%;
      height: 44px;
      padding: 0 8px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }

  ${media.greaterThan('desktop')`
    .searchHistoryHeader button:hover {
      opacity: 0.4;
    }
  `}
`

export const StyledSearchHistoryItem = styled.li`
  position: relative;
  border-radius: 2px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }

  .word {
    ${flexbox('start')};
    ${textStyle('base')};
    width: 100%;
    padding: 10px ${DELETE_BTN_SIZE} 10px 8px;
    font-weight: 400;
    text-align: left;
    color: ${({ theme }) => theme.colors.primary};
  }

  .delete {
    ${flexbox()};
    position: absolute;
    top: 6px;
    right: 0;
    width: ${DELETE_BTN_SIZE};
    height: ${DELETE_BTN_SIZE};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.tertiary};

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`
