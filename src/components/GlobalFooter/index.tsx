import React, { memo } from 'react'

import { ChevronIcon } from 'src/assets/images'
import { Grid } from '../Grid'
import { StyledGlobalFooter } from './styles'

const GlobalFooter: React.FC = () => {
  return (
    <StyledGlobalFooter>
      <Grid sm={4}>
        <h3 className="globalFooterTitle">
          고객센터
          <ChevronIcon className="chevron" />
        </h3>

        <a className="globalFooterContact" href="tel:10041004">
          1004-1004
        </a>

        <p className="globalFooterTime">
          평일 09:00 ~ 18:00 (주말 & 공휴일 제외)
        </p>

        <dl className="globalFooterDetail">
          <div>
            <dt>상호명</dt>
            <dd>버그가 너무 많아 김버그</dd>
          </div>
          <div>
            <dt>이메일</dt>
            <dd>
              <address>
                <a href="mailto:kimbugx@gmail.com">kimbugx@gmail.com</a>
              </address>
              (제휴문의)
            </dd>
          </div>
          <div>
            <dt>대표이사</dt>
            <dd>김버그</dd>
          </div>
          <div>
            <dt>주소</dt>
            <dd>
              <address>
                <a
                  href="https://www.youtube.com/c/kimbug"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.youtube.com/c/kimbug
                </a>
              </address>
            </dd>
          </div>
        </dl>
      </Grid>
    </StyledGlobalFooter>
  )
}

const MemoGlobalFooter = memo(GlobalFooter)
export { MemoGlobalFooter as GlobalFooter }
