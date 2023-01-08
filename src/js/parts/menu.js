// Show Burger Menu
function menu() {
	const mobileMenuButton = document.querySelector('.header__link-menu');
	const mobileMenuPopup = document.querySelector('.menu');
	const mobileMenuClose = document.querySelector('.menu__close');
	const mobileMenuLinks = document.querySelectorAll('.menu__link');

	mobileMenuButton.addEventListener('click', (e) => openMenu(e));
	mobileMenuClose.addEventListener('click', (e) => closeMenu(e));
	mobileMenuLinks.forEach((link) => link.addEventListener('click', (e) => closeMenu(e)));

	function openMenu() {
		mobileMenuPopup.classList.add('menu_active');
		document.body.classList.add('hidden');
	}

	function closeMenu(e) {
		// if (!e.target.classList.contains('menu__link-catalog')) {
		mobileMenuPopup.classList.remove('menu_active');
		document.body.classList.remove('hidden');
		// }
	}
}
