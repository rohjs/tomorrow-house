import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'

import { useAuth, useClickOutside } from 'src/hooks'

import { StyledGnbUserAuth, StyledGnbUserMenu } from './styles'

interface GnbUserMenuProps {
  user: User | null
}

export const GnbUserMenu: React.FC<GnbUserMenuProps> = ({ user }) => {
  const { requestLogin } = useAuth()
  const [open, setOpen] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)

  const toggleUserMenu = () => setOpen((prev) => !prev)
  const closeUserMenu = () => setOpen(false)

  useClickOutside(userMenuRef, closeUserMenu)

  if (user == null) {
    return (
      <StyledGnbUserAuth>
        <button type="button" onClick={requestLogin}>
          로그인
        </button>
        <button type="button" onClick={requestLogin}>
          회원가입
        </button>
      </StyledGnbUserAuth>
    )
  }

  return (
    <StyledGnbUserMenu className={cx({ active: open })} ref={userMenuRef}>
      <button
        className="gnbUserMenuButton"
        type="button"
        onClick={toggleUserMenu}
        aria-label="마이메뉴 열기 버튼"
      >
        <img src={user.userImage} alt={user.username} />
      </button>

      <div className="gnbUserMenuContent">
        <ul>
          <li>
            <Link to="/" onClick={closeUserMenu}>
              마이페이지
            </Link>
          </li>
          <li>
            <Link to="/" onClick={closeUserMenu}>
              나의 쇼핑
            </Link>
          </li>
          <li>
            <Link to="/" onClick={closeUserMenu}>
              이벤트
            </Link>
          </li>
          <li>
            <button type="button">로그아웃</button>
          </li>
        </ul>
      </div>
    </StyledGnbUserMenu>
  )
}
