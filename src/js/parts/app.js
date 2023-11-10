document.addEventListener('DOMContentLoaded', () => {
	if (document.querySelector('.header')) {
		select('.header__lang-button');
		select('.header__search-select');
		search();
		menu();
		if (window.screen.width < 576) {
			fixHeader();
		}
		categories('.menu__link-catalog');
	}

	if (document.querySelector('.collections__slider')) {
		slyderCarousel('.collections__slider', '.collections__slides', '.collections__item', {
			// is_autoplay: true,
			pagination_parent: 'collections__pagination',
			pagination_item: 'collections__pagination-item',
			pagination_active: 'collections__pagination-item_active',
		});
	}

	if (document.querySelector('.review__slider')) {
		slyderCarousel('.review__slider', '.review__slides', '.review__item', {
			// is_autoplay: true,
			next_button: '.review__button-next',
			prev_button: '.review__button-prev',
		});
	}

	if (document.querySelector('.review__slider')) {
		showFullText('.review__slider');
	}

	if (document.querySelector('.trending__content')) {
		tabs('.trending__content');
	}
	if (document.querySelector('.shop__content')) {
		tabs('.shop__content');
	}

	if (document.querySelector('#time')) {
		timer('#time', '2024-04-01');
		timer('#time1', '2024-01-30T03:24:23');
	}
	if (document.querySelector('#time1')) {
		timer('#time1', '2024-01-30T03:24:23');
	}

	popup();
});
