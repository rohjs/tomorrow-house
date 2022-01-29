const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

orderCtaBuyButton.addEventListener('click', function () {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
})

orderModalOverlay.addEventListener('click', function () {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
})
