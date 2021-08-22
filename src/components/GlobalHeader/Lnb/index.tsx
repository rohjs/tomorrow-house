import React from 'react'
import { NavLink } from 'react-router-dom'
import cx from 'classnames'
import type { Location } from 'history'

import { useRouter } from 'src/hooks'
import { getPageUrl, isIndexPage } from '../../utils'

import { Grid } from '../../Grid'
import { StyledLnb } from './styles'
import navMap from '../../navMap.json'

interface LnbProps {
  className?: string
}

export const Lnb: React.FC<LnbProps> = ({ className }) => {
  const { location } = useRouter()
  let [, category] = location.pathname.split('/')
  category = category.split('?')[0]
  if (!['community', 'store', 'expert'].includes(category))
    category = 'community'
  const urlMap = navMap[category as keyof typeof navMap]

  return (
    <StyledLnb className={cx('lnb', className)}>
      <Grid sm={4}>
        <h1 className="visuallyHidden">스토어 메뉴</h1>

        <ul>
          {Object.entries(urlMap).map(([url, label]) => {
            return (
              <li key={`lnb-${url}`}>
                <NavLink
                  to={getPageUrl(category, url)}
                  exact
                  activeClassName="active"
                  isActive={
                    isIndexPage(category, url)
                      ? (_: any, location: Location<unknown>) => {
                          return ['/', '/community'].includes(location.pathname)
                        }
                      : undefined
                  }
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
