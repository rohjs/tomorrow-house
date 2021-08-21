import React, { useState } from 'react'

import { useMount, useToast, useUnmount } from 'src/hooks'
import { ToastCategory } from 'src/types/enum'

interface ToastViewProps {
  toast: Toast
}

export const ToastView: React.FC<ToastViewProps> = ({ toast }) => {
  const { removeToast } = useToast()
  const { category, props } = toast

  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)

  const handleMount = () => {
    const id = setTimeout(() => {
      removeToast(category)
    }, 3000)
    setTimeoutId(id)
  }

  const handleUnmount = () => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }

  useMount(handleMount)
  useUnmount(handleUnmount)

  switch (category) {
    case ToastCategory.SaveBookmarkToast:
      return <div>{category}</div>
    case ToastCategory.UnsaveBookmarkToast:
      return <div>{category}</div>
    default:
      return null
  }
}
