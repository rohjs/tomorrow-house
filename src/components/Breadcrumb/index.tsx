import React from 'react'
import { Link } from 'react-router-dom'

import { ChevronIcon } from 'src/assets/images'
import { StyledBreadcrumb } from './styles'

interface BreadcrumbProps {
  id: string
  links: BreadcrumbLink[]
  className?: string
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  id,
  links,
  className,
}) => {
  return (
    <StyledBreadcrumb className={className}>
      {links.map(({ url, label }, index) => {
        const key = `${id}-${index}`
        const isLastItem = index === links.length - 1

        return (
          <React.Fragment key={key}>
            <Link to={url}>{label}</Link>
            {!isLastItem && <ChevronIcon className="chevron" aria-hidden />}
          </React.Fragment>
        )
      })}
      {/* <Link to="/">가전</Link>
      <ChevronIcon className="chevron" aria-hidden />
      <Link to="/">계절가전</Link>
      <ChevronIcon className="chevron" aria-hidden />
      <Link to="/">전기히터/온풍기</Link>
      <ChevronIcon className="chevron" aria-hidden />
      <Link to="/">전기히터</Link> */}
    </StyledBreadcrumb>
  )
}
