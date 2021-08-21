import React from 'react'
import { NavLink } from 'react-router-dom'
import cx from 'classnames'

import { getPageUrl } from '../../utils'

import { Grid } from '../../Grid'
import { StyledLnb } from './styles'
import navMap from '../../navMap.json'

interface LnbProps {
  className?: string
}

export const Lnb: React.FC<LnbProps> = ({ className }) => {
  return (
    <StyledLnb className={cx('lnb', className)}>
      <Grid sm={4}>
        <h1 className="visuallyHidden">스토어 메뉴</h1>

        <ul>
          {Object.entries(navMap.store).map(([url, label]) => {
            return (
              <li key={`lnb-${url}`}>
                <NavLink
                  to={getPageUrl('store', url)}
                  exact
                  activeClassName="active"
                >
                  {label}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </Grid>
    </StyledLnb>
  )
}
