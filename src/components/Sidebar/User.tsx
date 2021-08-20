import React from 'react'
import { Link } from 'react-router-dom'

import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { StyledSidebarAuth, StyledSidebarUser } from './styles'

interface SidebarUserProps {
  user?: User
  closeSidebar: () => void
}

export const SidebarUser = ({ user, closeSidebar }: SidebarUserProps) => {
  if (user == null) {
    return (
      <StyledSidebarAuth>
        <Button to="/login" variant="outlined" size={40} onClick={closeSidebar}>
          로그인
        </Button>
        <Button to="/signup" variant="primary" size={40} onClick={closeSidebar}>
          회원가입
        </Button>
      </StyledSidebarAuth>
    )
  }

  const { id, username, userImage } = user
  return (
    <StyledSidebarUser>
      <Link to={`/user/${id}`} onClick={closeSidebar}>
        <Avatar className="avatar" username={username} image={userImage} />
        <strong className="username">{username}</strong>
      </Link>
    </StyledSidebarUser>
  )
}
