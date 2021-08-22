import React from 'react'
import { NavLink } from 'react-router-dom'
import type { Location } from 'history'

import { getGnbMenuName, getPageUrl, isIndexPage } from '../../utils'

import { StyledGnbNav } from './styles'
import urlMap from '../../navMap.json'

export const GnbNav: React.FC = () => {
  const urlList = Object.keys(urlMap)

  return (
    <StyledGnbNav className="gnbNav">
      <h2 className="visuallyHidden">메뉴</h2>

      <ul className="gnbNavList">
        {urlList.map((url) => {
          const isActive = isIndexPage(url, 'index')
            ? (_: any, location: Location<unknown>) => {
                return (
                  location.pathname === '/' ||
                  location.pathname.startsWith('/community')
                )
              }
            : undefined
          return (
            <li className="gnbNavItem" key={`gnbNavItem-${url}`}>
              <NavLink
                to={getPageUrl(url)}
                activeClassName="active"
                isActive={isActive}
              >
                {getGnbMenuName(url)}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </StyledGnbNav>
  )
}
