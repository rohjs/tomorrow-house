import React from 'react'
import { Link } from 'react-router-dom'

import { useAppSelector, useModals, useResponsive } from 'src/hooks'
import { ModalCategory } from 'src/types/enum'
import { getUser } from 'src/app/auth'

import { Logo } from 'src/assets/images'
import { SidebarDrawer } from './Drawer'
import { SidebarUser } from './User'
import { StyledSidebar } from './styles'

import navMap from '../navMap.json'

export const Sidebar: React.FC = () => {
  const user = useAppSelector(getUser)
  const { removeModal } = useModals()
  const { isDesktop } = useResponsive()

  const closeSidebar = () => {
    removeModal(ModalCategory.SidebarModal)
  }

  if (isDesktop) return null

  return (
    <StyledSidebar className="sidebar">
      <header className="sidebarHeader">
        <h1 className="logo">
          <Link to="/">
            <Logo aria-label="내일의 집" />
          </Link>
        </h1>

        <SidebarUser user={user} closeSidebar={closeSidebar} />
      </header>

      <nav className="sidebarNav">
        <h2 className="visuallyHidden">메뉴</h2>
        <SidebarDrawer category="community" urlMap={navMap.community} />
        <SidebarDrawer category="store" urlMap={navMap.store} />
        <SidebarDrawer category="expert" urlMap={navMap.expert} />
      </nav>

      <div className="sidebarUserMenu">
        <ul>
          <li>
            <Link to="/">마이페이지</Link>
          </li>
          <li>
            <Link to="/">나의 쇼핑</Link>
          </li>
          <li>
            <Link to="/">스크랩북</Link>
          </li>
          <li>
            <Link to="/">알림</Link>
          </li>
          <li>
            <Link to="/">이벤트</Link>
          </li>
        </ul>
      </div>
    </StyledSidebar>
  )
}
