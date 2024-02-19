const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
const allSection = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	nav.classList.toggle('nav--active');

	navBtnBars.classList.remove('black-bars-color');

	if (!nav.classList.contains('nav--active')) {
		handleObserver();
	}

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active');
		})
	})

	handleNavItemAnimation()
	deleteAnimation()
}

const handleNavItemAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav-item-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const deleteAnimation = () => {
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			allNavItems.forEach(el => {
				el.classList.remove('nav-item-animation')
			})
		})
	})
}

const handleObserver = () => {
	const currentSection = window.scrollY

	allSection.forEach(section => {
		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.add('black-bars-color')
		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.remove('black-bars-color')
		}
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
navBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', handleObserver)
