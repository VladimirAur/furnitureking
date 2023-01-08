// Popup
function popup() {
	const popupField = document.querySelector('.collections__cat');
	const popupWindow = document.querySelector('.collections__popup');
	const links = popupField.querySelectorAll('.category__link');

	document.body.addEventListener('mouseover', hidePopup);

	popupField.addEventListener('mouseover', (event) => {
		event.stopPropagation();
		if (
			event.target.classList.contains('category__link') ||
			event.target.parentNode.classList.contains('category__link')
		) {
			deActivateLinks();
			activateLink(event);
			showPopup();
		}
	});

	popupWindow.addEventListener('mouseover', (e) => {
		e.stopPropagation();
		showPopup();
	});
	popupWindow.addEventListener('mouseout', hidePopup);

	function showPopup() {
		popupWindow.classList.add('collections__popup_active');
		// popupWindow.style.height = popupField.clientHeight + 'px';
	}
	function hidePopup() {
		deActivateLinks();
		popupWindow.classList.remove('collections__popup_active');
	}

	function activateLink(event) {
		event.target.classList.add('category__link_active');
	}
	function deActivateLinks() {
		links.forEach((link) => link.classList.remove('category__link_active'));
	}
}
