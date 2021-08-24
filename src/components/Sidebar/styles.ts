import styled from 'styled-components'

import {
  animations,
  flexbox,
  positionCenterY,
  stripPx,
  textStyle,
  truncate,
} from 'src/styles/utils'
import navMap from '../navMap.json'

const SIDEBAR_WIDTH = `240px`
const SIDEBAR_DRAWER_LIST_PADDING = `20px`
const SIDEBAR_DRAWER_ITEM_HEIGHT = `36px`

const COMMUNITY_LENGTH = Object.keys(navMap.community).length
const STORE_LENGTH = Object.keys(navMap.store).length
const EXPERT_LENGTH = Object.keys(navMap.expert).length

export const StyledSidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.levels.sidebarModal};
  width: ${SIDEBAR_WIDTH};
  height: 100vh;
  padding: 32px 20px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.white};
  transition: transform 300ms ease-in-out;
  overscroll-behavior: contain;
  animation: ${animations.slideFromLeft} 300ms ease-in-out;

  &::-webkit-scrollbar {
    display: none;
  }

  .sidebarHeader {
    padding: 0 12px;

    .logo {
      ${flexbox('start')}

      a {
        display: block;
      }

      svg {
        display: block;
        width: auto;
        height: 20px;
      }
    }
  }

  .sidebarUser {
  }

  .sidebarAuth {
  }

  .sidebarNav {
    .drawerMenu {
      border-top: 1px solid ${({ theme }) => theme.colors.border};

      &.is-expert {
        border-bottom: 1px solid ${({ theme }) => theme.colors.border};
      }
    }
  }
`

export const StyledSidebarAuth = styled.div`
  ${flexbox('between')}
  height: 88px;

  button {
    width: 84px;
  }
`

export const StyledSidebarUser = styled.div`
  ${flexbox('start')}
  height: 88px;

  a {
    ${flexbox('start')}
    ${textStyle('sm')}
        width: 100%;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }

  .avatar {
    flex-grow: 0;
    flex-shrink: 0;
    margin-right: 8px;
  }

  .username {
    ${truncate()};
    flex-grow: 1;
  }
`

export const StyledSidebarUserMenu = styled.div`
  margin-top: 16px;

  li {
    a,
    button {
      ${flexbox('start')}
      ${textStyle('sm')}
        width: 100%;
      height: 36px;
      padding: 0 12px;
      color: ${({ theme }) => theme.colors.primary};

      &:active {
        color: ${({ theme }) => theme.colors.blue};
      }
    }
  }
`

export const StyledSidebarDrawer = styled.div`
  &.open {
    &.community {
      .drawerMenuContent {
        max-height: ${_calculateMaxContentHeight(COMMUNITY_LENGTH)};
      }
    }

    &.store {
      .drawerMenuContent {
        max-height: ${_calculateMaxContentHeight(STORE_LENGTH)};
      }
    }

    &.expert {
      .drawerMenuContent {
        max-height: ${_calculateMaxContentHeight(EXPERT_LENGTH)};
      }
    }

    .drawerMenuButton .chevron {
      transform: translateY(-50%) rotate(180deg);
    }

    .drawerMenuContent {
      max-height: 152px;
    }

    ul {
      padding-bottom: ${SIDEBAR_DRAWER_LIST_PADDING};
    }
  }

  .drawerMenuButton {
    ${flexbox('start')};
    ${textStyle('md')};
    position: relative;
    width: 100%;
    height: 54px;
    padding: 0 8px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    transition: color 200ms ease-in-out;

    &.active {
      color: ${({ theme }) => theme.colors.blue};
    }

    .icon {
      position: relative;
      top: 1px;
      margin-right: 8px;
      font-size: 24px;
      color: ${({ theme }) => theme.colors.primary};
    }

    .chevron {
      ${positionCenterY()};
      right: 8px;
      font-size: 16px;
      color: ${({ theme }) => theme.colors.primary};
      transition: transform 200ms ease-in-out;
    }
  }

  .drawerMenuContent {
    max-height: 0;
    overflow: hidden;
    transition: max-height 200ms ease-in-out;

    li {
      a {
        ${flexbox('start')};
        ${textStyle('sm')};
        width: 100%;
        height: ${SIDEBAR_DRAWER_ITEM_HEIGHT};
        padding: 0 12px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primary};

        &.active {
          color: ${({ theme }) => theme.colors.blue};
        }
      }

      .new {
        font-size: 16px;
      }
    }
  }
`

function _calculateMaxContentHeight(length: number) {
  return `${
    stripPx(SIDEBAR_DRAWER_ITEM_HEIGHT) * length +
    stripPx(SIDEBAR_DRAWER_LIST_PADDING)
  }px`
}
