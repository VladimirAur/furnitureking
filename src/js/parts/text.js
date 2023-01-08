// Show Full Text
function showFullText(parrentClass) {
	const itemsField = document.querySelector(parrentClass);

	itemsField.addEventListener('click', (e) => {
		const target = e.target;

		if (target.classList.contains('review__more')) {
			const currentText = target.parentNode.querySelector('.review__text');
			currentText.classList.toggle('review__text_full');
		}
	});
}
