import React from 'react'
import { Link } from 'react-router-dom'

import { useAppSelector, useModal, useResponsive } from 'src/hooks'
import { ModalCategory } from 'src/types/enum'
import { getUser } from 'src/app/auth'

import { Logo } from 'src/assets/images'
import { SidebarDrawer } from './Drawer'
import { SidebarUser } from './User'
import { SidebarUserMenu } from './UserMenu'
import { StyledSidebar } from './styles'
import navMap from '../navMap.json'

export const Sidebar: React.FC = () => {
  const user = useAppSelector(getUser)

  const { removeModal } = useModal()
  const { isDesktop } = useResponsive()

  const closeSidebar = () => removeModal(ModalCategory.SidebarModal)

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
        <SidebarDrawer
          category="community"
          urlMap={navMap.community}
          closeSidebar={closeSidebar}
        />
        <SidebarDrawer
          category="store"
          urlMap={navMap.store}
          closeSidebar={closeSidebar}
        />
        <SidebarDrawer
          category="expert"
          urlMap={navMap.expert}
          closeSidebar={closeSidebar}
        />
      </nav>

      {!!user && <SidebarUserMenu closeSidebar={closeSidebar} />}
    </StyledSidebar>
  )
}
