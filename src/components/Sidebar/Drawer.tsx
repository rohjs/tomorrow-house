import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'

import { getGnbMenuName } from '../utils'

import {
  ChevronIcon,
  CommunityIcon,
  ExpertIcon,
  StoreIcon,
} from 'src/assets/images'
import { StyledSidebarDrawer } from './styles'

interface SidebarDrawerProps {
  category: string
  urlMap: Record<string, string>
  closeSidebar?: () => void
}

export const SidebarDrawer: React.FC<SidebarDrawerProps> = ({
  category,
  urlMap,
  closeSidebar,
}) => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen((prev) => !prev)

  const label = getGnbMenuName(category)
  let icon: React.SVGProps<SVGSVGElement>

  switch (category) {
    case 'community':
      icon = <CommunityIcon className="icon" />
      break
    case 'store':
      icon = <StoreIcon className="icon" />
      break
    case 'expert':
      icon = <ExpertIcon className="icon" />
      break
    default:
      icon = <CommunityIcon className="icon" />
      break
  }

  return (
    <StyledSidebarDrawer className={cx('drawerMenu', category, { open })}>
      <button className="drawerMenuButton" type="button" onClick={toggleOpen}>
        {icon}
        {label}
        <ChevronIcon className="chevron" />
      </button>

      <div className="drawerMenuContent">
        <ul>
          {Object.entries(urlMap).map(([url, label]) => (
            <li key={`drawerMenuItem-${url}`}>
              <Link to={`/${category}/${url}`} onClick={closeSidebar}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </StyledSidebarDrawer>
  )
}
