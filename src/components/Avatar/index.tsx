import React from 'react'
import { Link } from 'react-router-dom'
import { StyledAvatar } from './styles'

export type AvatarSize = 'big' | 'small'

export interface AvatarProps {
  username: string
  to?: string
  image?: string
  size?: AvatarSize
}

export const Avatar = ({
  username,
  to,
  image = '',
  size = 'small',
}: AvatarProps) => {
  const alt = `${username}님`

  if (to != null) {
    if (!image)
      return <StyledAvatar size={size} as={Link} to={to} aria-label={alt} />

    return (
      <StyledAvatar size={size} as={Link} to={to}>
        <img src={image} alt={alt} />
      </StyledAvatar>
    )
  }

  if (!image) return <StyledAvatar size={size} aria-label={alt} />

  return (
    <StyledAvatar size={size}>
      <img src={image} alt={alt} />
    </StyledAvatar>
  )
}
