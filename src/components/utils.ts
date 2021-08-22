export function getGnbMenuName(category: string) {
  switch (category) {
    case 'community':
      return '커뮤니티'
    case 'store':
      return '스토어'
    case 'expert':
      return '인테리어시공'
    default:
      return '커뮤니티'
  }
}

export function getPageUrl(category: string, url?: string) {
  if (!url || url === 'index') return `/${category}`
  return `/${category}/${url}`
}

export function getSearchQueryUrl(value: string) {
  return `/search?query=${value}`
}

export function isIndexPage(category: string, url: string) {
  return category === 'community' && url === 'index'
}
