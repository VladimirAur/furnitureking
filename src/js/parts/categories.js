// Categories
function categories(button) {
	const openButton = document.querySelector(button);
	const categoryWindow = document.querySelector('.collections__cat');

	openButton.addEventListener('click', switchCategoryList);
	document.addEventListener('click', closeCategoryList);

	function switchCategoryList(e) {
		e.stopPropagation();
		categoryWindow.classList.toggle('collections__cat_active');
	}
	function closeCategoryList() {
		categoryWindow.classList.remove('collections__cat_active');
	}
}
