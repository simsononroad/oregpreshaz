window.addEventListener("DOMContentLoaded", (event) => {
	const toggleButton = document.getElementsByClassName('toggle-button')[0]
	const navbarLinks = document.getElementsByClassName('navbar-links')[0]
	const BrandTitle = document.getElementsByClassName('brand-title')[0]

	toggleButton.addEventListener('click', () => {
		navbarLinks.classList.toggle('active')
	})
	BrandTitle.addEventListener('click', () => {
        window.open("../index.html")
    })
})