export function stripPx(value: string) {
  return parseInt(value.replace('px', ''), 10)
}
