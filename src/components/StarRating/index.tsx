import React from 'react'
import cx from 'classnames'

import { StarIcon } from 'src/assets/images'
import { StyledStarRating } from './styles'

export interface StarRatingProps {
  id: string
  rating: number
  size?: number
  tabletSize?: number
  desktopSize?: number
  className?: string
}

export const StarRating: React.FC<StarRatingProps> = ({
  id,
  rating,
  size = 16,
  tabletSize = size,
  desktopSize = tabletSize,
  className,
}) => {
  if (!rating) return null

  const activeStars = Math.floor(rating)
  const maskedStar = rating - activeStars
  const inactiveStars = 5 - activeStars - Math.ceil(maskedStar)

  const maskId = `mask-${id}`
  const maskStyle = { mask: `url(#${maskId})` }

  return (
    <StyledStarRating
      className={cx('starRating', className)}
      size={size}
      tabletSize={tabletSize}
      desktopSize={desktopSize}
    >
      {!!activeStars &&
        [...Array(activeStars)].map((_, index) => {
          const key = `activeStars-${id}-${index}`
          return <StarIcon className="active" key={key} />
        })}
      {!!maskedStar && (
        <div className="masked">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="active"
          >
            <defs>
              <mask id={maskId} x="0" y="0" width="100" height="100">
                <rect
                  x="0"
                  y="0"
                  width={2.5 * 6}
                  height="25"
                  style={{ fill: '#fff' }}
                />
              </mask>
            </defs>
            <path
              d="M12.003 20.4791L6.06954 22.991C5.39066 23.2897 4.87471 22.9095 4.9426 22.1763L5.4857 15.7541L1.27662 10.8797C0.774251 10.323 0.977916 9.72558 1.71111 9.54907L7.98399 8.09626L11.2969 2.58372C11.6907 1.932 12.3153 1.94557 12.709 2.58372L16.022 8.09626L22.2949 9.54907C23.0281 9.72558 23.2181 10.323 22.7293 10.8797L18.5203 15.7541L19.0634 22.1627C19.1313 22.9095 18.6153 23.2897 17.9364 22.991L12.003 20.4791Z"
              fill="currentColor"
              style={maskStyle}
            />
          </svg>
          <StarIcon className="inactive" />
        </div>
      )}
      {!!inactiveStars &&
        [...Array(inactiveStars)].map((_, index) => {
          const key = `inactiveStars-${id}-${index}`
          return <StarIcon className="inactive" key={key} />
        })}
    </StyledStarRating>
  )
}
