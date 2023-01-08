// Control Select
function select(selectWrapper) {
	const selectField = document.querySelector(selectWrapper);
	const selectTitle = selectField.querySelector('.select__title');
	const selectText = selectField.querySelector('.select__text');
	const selectList = selectField.querySelector('.select__list');
	const selectOption = selectField.querySelectorAll('.select__option');

	const titleActiveClass = 'select__title_active';
	const listActiveClass = 'select__list_active';

	selectTitle.addEventListener('click', (e) => {
		e.stopPropagation();
		showSelectList(e);
	});

	selectOption.forEach((item) => {
		item.addEventListener('click', (event) => {
			changeSelectText(event);
			hideSelectList();
		});
	});

	document.addEventListener('click', hideSelectList);

	function showSelectList(event) {
		event.preventDefault();
		document.querySelectorAll('.select__title').forEach((item) => {
			item.classList.remove(titleActiveClass);
		});
		document.querySelectorAll('.select__list').forEach((item) => {
			item.classList.remove(listActiveClass);
		});

		selectTitle.classList.add(titleActiveClass);
		selectList.classList.add(listActiveClass);
	}

	function hideSelectList() {
		selectTitle.classList.remove(titleActiveClass);
		selectList.classList.remove(listActiveClass);
	}

	function changeSelectText(event) {
		selectText.textContent = event.target.textContent;
	}
}
