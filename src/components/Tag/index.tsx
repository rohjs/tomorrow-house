import React, { memo } from 'react'

import { StyledTag } from './styles'

export type TagColor = 'red' | 'gray' | 'green'
export interface TagProps {
  label: string
  color?: TagColor
}

const Tag: React.FC<TagProps> = ({ label, color }) => {
  if (!label) return null

  return <StyledTag color={color}>{label}</StyledTag>
}

const MemoTag = memo(Tag)
export { MemoTag as Tag }
