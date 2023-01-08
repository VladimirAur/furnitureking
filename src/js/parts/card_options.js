// Card Option
function showCardOption(productWrapper) {
	const productField = productWrapper;
	const cardPhotos = productField.querySelectorAll('.card__photo');
	const options = productField.querySelectorAll('.card__options');

	productField.addEventListener('click', (event) => showOptions(event));

	function showOptions(event) {
		const target = event.target;

		if (
			target.classList.contains('card__photo') ||
			target.parentNode.classList.contains('card__photo')
		) {
			event.preventDefault();

			cardPhotos.forEach((photo, i) => {
				if (target == photo || target.parentNode == photo) {
					options[i].classList.toggle('card__options_active');
				}
			});
		}
	}
}

// Card Option animation
function activateCardOption(productWrapper) {
	const productField = productWrapper;
	const cards = productField.querySelectorAll('.card');

	cards.forEach((card) =>
		card.addEventListener('click', (e) => {
			const target = e.target;

			if (
				target.classList.contains('card__options-link') &&
				target.getAttribute('data-action') === 'refresh'
			) {
				e.preventDefault();
				target.classList.add('card__options-link_rotate');
				card.querySelectorAll('.card__options-link').forEach((link) => {
					link.classList.remove('card__options-link_active');
				});
			} else if (target.classList.contains('card__options-link')) {
				e.preventDefault();
				card.querySelectorAll('.card__options-link').forEach((link) => {
					link.classList.remove('card__options-link_rotate');
				});
				target.classList.toggle('card__options-link_active');
			}
		}),
	);
}
