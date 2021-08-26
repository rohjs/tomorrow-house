export function formatPrice(value?: number | string) {
  if (!value) return ''
  return value.toLocaleString('en', { maximumFractionDigits: 0 })
}
