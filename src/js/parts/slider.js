// Slider carousel
function slyderCarousel(parentClass, sliderClass, slideClass, config) {
	const sliderWrapper = document.querySelector(parentClass);
	const slider = sliderWrapper.querySelector(sliderClass);
	const sliderItems = sliderWrapper.querySelectorAll(slideClass);

	let sliderPosition = 0;
	let slidesArrLength = sliderItems.length;
	let currentSlide = 0;
	let transformCoef = 0;
	let round = 0;
	let timerId = '';

	let options = {
		is_autoplay: false,
		pagination_parent: '',
		pagination_item: '',
		pagination_active: '',
		next_button: '',
		prev_button: '',
	};

	for (let key in config) {
		if (key in options) {
			options[key] = config[key];
		}
	}

	sliderInit();

	function sliderInit() {
		if (options.pagination_parent && options.pagination_item && options.pagination_active) {
			const { pagination_parent, pagination_item, pagination_active } = options;
			createPagination(pagination_parent, pagination_item);
			onActivePagination(pagination_item, pagination_active);
		}
		if (options.next_button && options.prev_button) {
			const { next_button, prev_button } = options;
			sliderWrapper
				.querySelector(next_button)
				.addEventListener('click', () => moveSlide('next'));
			sliderWrapper
				.querySelector(prev_button)
				.addEventListener('click', () => moveSlide('prev'));
		}

		if (options.is_autoplay) {
			startAutoplay();
			slider.addEventListener('mouseenter', () => stopAutoplay());
			slider.addEventListener('mouseleave', () => startAutoplay());
		}
		swipeSlides(slider);
	}

	function createPagination(parentClass, itemClass) {
		const paginationWrapper = document.createElement('div');
		paginationWrapper.classList.add(parentClass);

		for (let i = 0; i < slidesArrLength; i++) {
			const item = document.createElement('button');
			item.classList.add(itemClass);
			item.setAttribute('type', 'button');
			item.setAttribute('data-index', `${i}`);
			// add listener
			item.addEventListener('click', changePosition);

			paginationWrapper.appendChild(item);
		}
		sliderWrapper.appendChild(paginationWrapper);
	}

	function onActivePagination(itemClass, activeClass, index = 0) {
		const paginationItems = sliderWrapper.querySelectorAll(`.${itemClass}`);
		paginationItems.forEach((item) => item.classList.remove(activeClass));
		paginationItems[index].classList.add(activeClass);
	}

	function moveSlide(direction) {
		if (direction === 'next') {
			--sliderPosition;
			++currentSlide;
			if (currentSlide > slidesArrLength - 1) {
				currentSlide = 0;
				transformCoef = slidesArrLength;
				round++;
			}
		} else {
			++sliderPosition;
			--currentSlide;
			if (currentSlide === -1) {
				currentSlide = slidesArrLength - 1;
				transformCoef = slidesArrLength;
				round--;
			}
		}

		let moveX = transformCoef * round;

		let sliderTranslate = 100 * sliderPosition + '%';
		slider.style.transform = `translateX( ${sliderTranslate})`;

		let slideTranslate = 100 * moveX + '%';
		sliderItems[currentSlide].style.transform = `translateX(${slideTranslate})`;

		if (options.pagination_parent && options.pagination_item && options.pagination_active) {
			const { pagination_item, pagination_active } = options;
			onActivePagination(pagination_item, pagination_active, currentSlide);
		}
	}

	function changePosition(event) {
		const index = event.target.getAttribute('data-index');
		const slideIndex = currentSlide;

		if (index > slideIndex) {
			for (let i = slideIndex; i < index; i++) {
				moveSlide('next');
			}
		} else {
			for (let i = index; i < slideIndex; i++) {
				moveSlide('prev');
			}
		}
	}

	function swipeSlides(slider) {
		slider.addEventListener('touchstart', handleTouchStart, false);
		slider.addEventListener('touchend', handleTouchEnd, false);

		let startX = null;
		let startY = null;

		function handleTouchStart(event) {
			startX = event.changedTouches[0].screenX;
			startY = event.changedTouches[0].screenY;
		}

		function handleTouchEnd(event) {
			if (!startX || !startY) {
				return false;
			}

			let endX = event.changedTouches[0].screenX;
			let endY = event.changedTouches[0].screenY;

			let diffX = endX - startX;
			let diffY = endY - startY;

			if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
				if (diffX < 0) {
					moveSlide('next');
				} else {
					moveSlide('prev');
				}
			} else {
				return;
			}
		}
		startX = null;
		startY = null;
	}

	function startAutoplay() {
		timerId = setInterval(function () {
			moveSlide('next');
		}, 3000);
	}

	function stopAutoplay() {
		clearInterval(timerId);
	}
}
