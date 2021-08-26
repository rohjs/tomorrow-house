import React, { memo } from 'react'

import { StyledTag } from './styles'

export type TagColor = 'red' | 'gray' | 'green'
export interface TagProps {
  label: string
  className?: string
  color?: TagColor
}

const Tag: React.FC<TagProps> = ({ label, className, color }) => {
  if (!label) return null

  return (
    <StyledTag className={className} color={color}>
      {label}
    </StyledTag>
  )
}

const MemoTag = memo(Tag)
export { MemoTag as Tag }
