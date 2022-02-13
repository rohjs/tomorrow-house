const orderForm = document.querySelector('.floating-order-form')
const bookmarkButton = orderForm.querySelector('.bookmark-button')

const cartButton = orderForm.querySelector('.button-group .btn-outlined')
const cartModal = document.querySelector('.cart-modal')
const cartModalOverlay = document.querySelector('.overlay')
const cartCloseButton = cartModal.querySelector('.btn-secondary')

const globalFooter = document.querySelector('.global-footer')

const TOP_HEADER_HEIGHT = 80 + 50 + 54
const ignoreScrollEvent = 10000

function adjustOrderFormHeightOnScroll(e) {
  if (window.innerWidth < 1200) {
    return
  }

  if (e.type === 'scroll' && window.scrollY < ignoreScrollEvent) {
    return
  }

  const { top } = globalFooter.getBoundingClientRect()
  const footerInViewport = window.innerHeight - top

  let formHeight = window.innerHeight - TOP_HEADER_HEIGHT

  if (footerInViewport > 0) {
    formHeight -= footerInViewport
  }

  orderForm.style.height = `${formHeight}px`
}

window.addEventListener('load', adjustOrderFormHeightOnScroll)
window.addEventListener(
  'scroll',
  _.throttle(adjustOrderFormHeightOnScroll, 100)
)

function toggleBookmarkButton() {
  const [icon] = this.children

  this.classList.toggle('is-active')
  icon.classList.toggle('ic-bookmark')
  icon.classList.toggle('ic-bookmark-filled')
}

bookmarkButton.addEventListener('click', toggleBookmarkButton)

function openCartModal() {
  cartModal.classList.add('is-active')
  cartModalOverlay.classList.add('is-active')
}

cartButton.addEventListener('click', openCartModal)

function closeCartModal() {
  cartModal.classList.remove('is-active')
  cartModalOverlay.classList.remove('is-active')
}

cartModalOverlay.addEventListener('click', closeCartModal)
cartCloseButton.addEventListener('click', closeCartModal)
