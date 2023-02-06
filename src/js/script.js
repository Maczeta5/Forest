const navBtn = document.querySelector('.navbar-btn')
const navLinks = document.querySelector('.navbar-links')
const navLink = document.querySelectorAll('.nav-link')
const footerYear = document.querySelector('.footer__year')


const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

const showNav = () => {
	navLinks.classList.toggle('show-nav')
}


navBtn.addEventListener('click', showNav)
navLink.forEach(link => link.addEventListener('click', () => navLinks.classList.remove('show-nav')))

handleCurrentYear ();

