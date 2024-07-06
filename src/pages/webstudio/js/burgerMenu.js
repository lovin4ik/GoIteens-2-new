const burgerOpen = document.querySelector('.header__burger')
const burgerClose = document.querySelector('.burger__menu__close')
const burger = document.querySelector('.burger__menu')

burgerOpen.addEventListener('click', () => {
	burger.classList.remove('is-hidden')
	document.body.classList.add('no-scroll')
})

burgerClose.addEventListener('click', () => {
	burger.classList.add('is-hidden')
	document.body.classList.remove('no-scroll')
})
