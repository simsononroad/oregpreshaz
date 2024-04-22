window.addEventListener("DOMContentLoaded", (event) => {
	const BrandTitle = document.getElementsByClassName('brand-title')[0]

	for (let toggleButton of document.querySelectorAll('.toggle-button')) {
		toggleButton.addEventListener('click', () => {
			for (let navbarLinks of document.querySelectorAll('.navbar-links')) {
				navbarLinks.classList.toggle('active')
			}
		})
	}

	BrandTitle.addEventListener('click', () => {
        window.open("../index.html")
    })
})