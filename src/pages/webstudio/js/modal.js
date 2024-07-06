const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const modalCloseBtn = document.querySelector('.modal__close')
const modalOpenBtn = document.querySelector('.hero__button')

const openModal = () => {}

modal.addEventListener('click', e => e.stopPropagation())

modalOpenBtn.addEventListener('click', () => {
	backdrop.classList.remove('is-hidden')
	document.body.classList.add('no-scroll')
})

backdrop.addEventListener('click', () => {
	backdrop.classList.add('is-hidden')
	document.body.classList.remove('no-scroll')
})

modalCloseBtn.addEventListener('click', () => {
	backdrop.classList.add('is-hidden')
	document.body.classList.remove('no-scroll')
})
