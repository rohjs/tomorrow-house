import styled from 'styled-components'

import {
  flexbox,
  inlineFlexbox,
  media,
  positionCenter,
  positionCenterX,
  stripPx,
  textStyle,
} from 'src/styles/utils'

const GNB_ICON_BUTTON_BADGE = `16px`
const GNB_NAV_PADDING = `8px`
const GNB_USER_MENU_BUTTON_SIZE = `32px`
const GNB_USER_MENU_TOOLTIP_SIZE = `12px`
export const GNB_HEIGHT_SM = `50px`
export const GNB_HEIGHT_LG = `80px`

export const StyledGnb = styled.div`
  width: 100%;
  height: ${GNB_HEIGHT_SM};
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  .gnbWrapper {
    ${flexbox('between')};
    position: relative;
    width: 100%;
    height: ${GNB_HEIGHT_SM};
  }

  .gnbLeft {
    .logo {
      ${positionCenter()}

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

  .gnbRight {
    .buttonGroup {
      ${flexbox('end')};
    }
  }

  ${media.greaterThan('tablet')`
    height: ${GNB_HEIGHT_LG};

    .gnbWrapper {
      height: ${GNB_HEIGHT_LG};
    }

    .gnbLeft {
      ${flexbox('start')};

      .logo {
        position: static;
        padding-right: 32px;
        transform: none;

        svg {
          height: 24px;
        }
      }
    }

    .gnbRight {
      ${flexbox('end')};

      .buttonGroup {
        margin-right: 24px;
      }

      .gnbIconButton {
        margin-right: 8px;
      }
    }
  `}
`

export const StyledGnbNav = styled.nav`
  .gnbNavList {
    ${flexbox('start')};
    position: relative;
    right: ${GNB_NAV_PADDING};
  }

  .gnbNavItem {
    margin-right: ${24 - stripPx(GNB_NAV_PADDING) * 2}px;

    &:hover {
      a {
        color: ${({ theme }) => theme.colors.blue};
      }
    }

    &:last-child {
      margin-right: 0;
    }

    a {
      ${textStyle('md')};
      display: block;
      padding: ${GNB_NAV_PADDING};
      font-weight: 700;
      white-space: nowrap;
      color: ${({ theme }) => theme.colors.primary};

      &.active {
        color: ${({ theme }) => theme.colors.blue};
      }
    }
  }
`

export const StyledGnbSearch = styled.div`
  position: relative;
  margin-right: 24px;

  .gnbSearchHistory {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    display: none;
    width: 100%;
    padding: 16px 8px 8px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
    box-shadow: ${({ theme }) => theme.boxShadows.dropdown};

    &.open {
      display: block;
    }

    .searchHistoryHeader {
      padding: 0 8px;
    }
  }
`

export const StyledGnbIconButton = styled.button`
  ${flexbox()};
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  transition: color 200ms ease-in-out, background-color 200ms ease-in-out;

  &.menu {
    color: ${({ theme }) => theme.colors.blue};

    &:active {
      color: ${({ theme }) => theme.colors.blueDark};
    }
  }

  &.cart {
    svg {
      position: relative;
      top: 1px;
      right: 1px;
    }
  }

  &:active {
    color: ${({ theme }) => theme.colors.primary};
  }

  .badge {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    height: ${GNB_ICON_BUTTON_BADGE};
    min-width: ${GNB_ICON_BUTTON_BADGE};
    padding: 0 4px;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    background-color: ${({ theme }) => theme.colors.red};
    border-radius: ${stripPx(GNB_ICON_BUTTON_BADGE) / 2}px;
  }

  ${media.greaterThan('tablet')`
      &:hover {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.blue};
      }
    `}
`

export const StyledGnbUserAuth = styled.div`
  ${flexbox()};
  margin-right: -6px;

  a {
    ${inlineFlexbox()};
    ${textStyle('sm')};
    padding: 4px 6px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
  }
`

export const StyledGnbUserMenu = styled.div`
  position: relative;

  &.active {
    .gnbUserMenuButton {
      border-color: ${({ theme }) => theme.colors.blue};
    }

    .gnbUserMenuContent {
      opacity: 1;
      visibility: visible;
      transform: translate3d(-50%, 0, 0);
    }
  }

  .gnbUserMenuButton {
    width: ${GNB_USER_MENU_BUTTON_SIZE};
    height: ${GNB_USER_MENU_BUTTON_SIZE};
    overflow: hidden;
    border: 3px solid ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    transition: border-color 200ms ease-in-out;

    &:hover {
      border-color: ${({ theme }) => theme.colors.blue};
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .gnbUserMenuContent {
    ${positionCenterX()};
    top: ${stripPx(GNB_USER_MENU_BUTTON_SIZE) +
    stripPx(GNB_USER_MENU_TOOLTIP_SIZE) +
    8}px;
    border-radius: 4px;
    opacity: 0;
    visibility: hidden;
    transform: translate3d(-50%, -10px, 0);
    box-shadow: ${({ theme }) => theme.boxShadows.dropdown};
    transition: opacity 200ms ease-in-out, transform 200ms ease-in-out,
      visibility 200ms ease-in-out;

    &::before,
    &::after {
      ${positionCenterX()};
      top: ${stripPx(GNB_USER_MENU_TOOLTIP_SIZE) * -2}px;
      display: block;
      width: 0;
      height: 0;
      border-top: ${GNB_USER_MENU_TOOLTIP_SIZE} solid transparent;
      border-right: 10px solid transparent;
      border-bottom: ${GNB_USER_MENU_TOOLTIP_SIZE} solid transparent;
      border-left: 10px solid transparent;
      content: '';
    }

    &::before {
      border-bottom-color: ${({ theme }) => theme.colors.border};
    }

    &::after {
      top: ${stripPx(GNB_USER_MENU_TOOLTIP_SIZE) * -2 + 2}px;
      border-bottom-color: ${({ theme }) => theme.colors.white};
    }

    ul {
      width: 200px;
      padding: 8px;
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: 4px;
    }

    li {
      a,
      button {
        ${flexbox('start')};
        ${textStyle('base')};
        width: 100%;
        height: 44px;
        padding: 0 8px;
        border-radius: 2px;
        color: ${({ theme }) => theme.colors.primary};

        &:hover {
          background-color: ${({ theme }) => theme.colors.background};
        }
      }
    }
  }
`
