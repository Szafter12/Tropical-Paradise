const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')

const handleNav = () => {
	nav.classList.toggle('nav--active')

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})

	handleNavItemAnimation();
    deleteAnimation();
}

const handleNavItemAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle('nav-item-animation');
		item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
	})
}


navBtn.addEventListener('click', handleNav)

const deleteAnimation = () => {
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			allNavItems.forEach(el => {
				el.classList.remove('nav-item-animation')
			})
		})
	})
}
