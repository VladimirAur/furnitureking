// Tabs
function tabs(tabsWrapper) {
	const tabsField = document.querySelector(tabsWrapper);
	const tabsItems = tabsField.querySelectorAll('.category__link');

	activateTab();
	tabsItems.forEach((item, i) =>
		item.addEventListener('click', (event) => {
			event.preventDefault();
			activateTab(i);
		}),
	);

	function activateTab(i = 0) {
		removeActiveClass();
		addActiveClass(i);
		showTabContent(tabsItems[i]);
		showCardOption(tabsField);
		activateCardOption(tabsField);
	}

	function removeActiveClass() {
		tabsItems.forEach((tab) => tab.classList.remove('category__link_active'));
	}

	function addActiveClass(i) {
		tabsItems[i].classList.add('category__link_active');
	}

	function showTabContent(currentTab) {
		const productWrapper = tabsField.querySelector('.products');
		const type = currentTab.getAttribute('data-type');

		addProduct(productWrapper, type);
	}
}
