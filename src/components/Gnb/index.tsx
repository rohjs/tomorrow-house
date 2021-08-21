import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { useAppSelector, useModals, useResponsive } from 'src/hooks'
import { ModalCategory } from 'src/types/enum'
import { getUser } from 'src/app/auth'

import {
  BellIcon,
  BookmarkIcon,
  CartIcon,
  ChevronIcon,
  Logo,
  MenuIcon,
  SearchIcon,
} from 'src/assets/images'
import { Button } from '../Button'
import { Column, Container, Row } from '../Grid'
import { GnbNav } from './Nav'
import { GnbSearch } from './Search'
import { GnbUserMenu } from './UserMenu'
import { StyledGnb, StyledGnbIconButton } from './styles'

const Gnb: React.FC = () => {
  const user = useAppSelector(getUser)
  const isLoggedIn = user != null

  const { isMobile, isDesktop } = useResponsive()
  const { addModal } = useModals()

  const openSidebar = () => {
    addModal({
      category: ModalCategory.SidebarModal,
      props: {},
    })
  }

  const openSearchModal = () => {
    addModal({
      category: ModalCategory.SearchModal,
      props: {},
    })
  }

  return (
    <StyledGnb>
      <Container>
        <Row>
          <Column sm={4}>
            <div className="gnbWrapper">
              <div className="gnbLeft">
                <h1 className="logo">
                  <Link to="/">
                    <Logo />
                  </Link>
                </h1>

                {isMobile ? (
                  <StyledGnbIconButton
                    className="gnbIconButton menu"
                    type="button"
                    aria-label="메뉴 열기 버튼"
                    onClick={openSidebar}
                  >
                    <MenuIcon />
                  </StyledGnbIconButton>
                ) : (
                  <GnbNav />
                )}
              </div>

              <div className="gnbRight">
                {isDesktop && <GnbSearch />}

                <div className="buttonGroup">
                  {!isDesktop && (
                    <StyledGnbIconButton
                      className="gnbIconButton search"
                      type="button"
                      aria-label="검색창 열기 버튼"
                      onClick={openSearchModal}
                    >
                      <SearchIcon />
                    </StyledGnbIconButton>
                  )}
                  {!isMobile && isLoggedIn && (
                    <>
                      <StyledGnbIconButton
                        className="gnbIconButton bookmark"
                        as={Link}
                        to="/"
                        aria-label="스크랩북 페이지로 이동"
                      >
                        <BookmarkIcon />
                      </StyledGnbIconButton>
                      <StyledGnbIconButton
                        className="gnbIconButton"
                        as={Link}
                        to="/"
                        aria-label="내 소식 페이지로 이동"
                      >
                        <BellIcon />
                      </StyledGnbIconButton>
                    </>
                  )}
                  <StyledGnbIconButton
                    className="gnbIconButton cart"
                    as={Link}
                    to="/cart"
                    aria-label="장바구니 페이지로 이동"
                  >
                    <CartIcon />
                    <strong className="badge">5</strong>
                  </StyledGnbIconButton>

                  {!isMobile && <GnbUserMenu user={user} />}
                </div>

                {!isMobile && (
                  <Button size={40} variant="primary" type="button">
                    글쓰기
                    <ChevronIcon />
                  </Button>
                )}
              </div>
            </div>
          </Column>
        </Row>
      </Container>
    </StyledGnb>
  )
}

const MemoGnb = memo(Gnb)
export { MemoGnb as Gnb }
