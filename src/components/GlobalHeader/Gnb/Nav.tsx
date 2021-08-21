import React from 'react'
import { NavLink } from 'react-router-dom'

import { getGnbMenuName, getPageUrl } from '../../utils'

import { StyledGnbNav } from './styles'
import urlMap from '../../navMap.json'

export const GnbNav: React.FC = () => {
  const urlList = Object.keys(urlMap)

  return (
    <StyledGnbNav className="gnbNav">
      <h2 className="visuallyHidden">메뉴</h2>

      <ul className="gnbNavList">
        {urlList.map((url) => (
          <li className="gnbNavItem" key={`gnbNavItem-${url}`}>
            <NavLink to={getPageUrl(url)} activeClassName="active">
              {getGnbMenuName(url)}
            </NavLink>
          </li>
        ))}
      </ul>
    </StyledGnbNav>
  )
}
