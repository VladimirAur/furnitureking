// Show Form Search
function search() {
	const searchFormLink = document.querySelector('.header__link-search');
	const searchForm = document.querySelector('.header__search');

	searchFormLink.addEventListener('click', showSearchForm);

	document.addEventListener('click', hideSearchForm);
	searchForm.addEventListener('click', (e) => {
		if (window.screen.width < 576) {
			e.stopPropagation();
		}
	});

	function showSearchForm(event) {
		event.stopPropagation();
		searchForm.classList.toggle('header__search_active');
	}
	function hideSearchForm() {
		searchForm.classList.remove('header__search_active');
	}
}
