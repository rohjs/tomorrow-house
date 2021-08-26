declare interface BreadcrumbLink {
  label: string
  url: string
}

declare interface Modal {
  category: import('./enum').ModalCategory
  props: any
}

declare interface SearchHistory {
  content: string
  createdAt: number
}

declare interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
}

declare interface Toast {
  category: import('./enum').ToastCategory
  props: any
}
