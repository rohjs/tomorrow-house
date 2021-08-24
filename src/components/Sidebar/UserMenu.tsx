import React from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from 'src/hooks'

import { StyledSidebarUserMenu } from './styles'

interface SidebarUserMenuProps {
  closeSidebar: () => void
}

export const SidebarUserMenu: React.FC<SidebarUserMenuProps> = ({
  closeSidebar,
}) => {
  const { requestLogOut } = useAuth()

  const handleLogOut = () => {
    requestLogOut()
    closeSidebar()
  }

  return (
    <StyledSidebarUserMenu>
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
        <li>
          <button type="button" onClick={handleLogOut}>
            로그아웃
          </button>
        </li>
      </ul>
    </StyledSidebarUserMenu>
  )
}
