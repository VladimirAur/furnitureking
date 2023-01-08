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
		timer('#time', '2023-04-01');
		timer('#time1', '2023-01-30T03:24:23');
	}
	if (document.querySelector('#time1')) {
		timer('#time1', '2023-01-30T03:24:23');
	}

	popup();
});

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

// Fix header
function fixHeader() {
	const header = document.querySelector('.header');
	window.addEventListener('scroll', () => {
		if (scrollY > 1) {
			header.classList.add('header_fixed');
			document.body.style.paddingTop = header.clientHeight + 'px';
		} else {
			header.classList.remove('header_fixed');
			document.body.style.paddingTop = 0;
		}
	});
}

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

// Add products
function addProduct(productWrapper, type) {
	const productField = productWrapper;

	const offerClassObj = {
		sale: 'card__offer_green',
		new: 'card__offer_blue',
		default: 'card__offer_red',
	};

	const productArr = [
		{
			img: 'img/products/product1.jpg',
			alt: 'photo-card',
			name: 'Chair',
			title: 'Minimal LCD chair',
			new_price: 180,
			old_price: 250,
			rating: 3,
			offer_text: 'new',
		},
		{
			img: 'img/products/product2.jpg',
			alt: 'photo-card',
			name: 'Chair',
			title: 'Minimal iconic chair',
			new_price: 120,
			old_price: 150,
			rating: 4,
			offer_text: 'new',
		},
		{
			img: 'img/products/product3.jpg',
			alt: 'photo-card',
			name: 'Chair',
			title: 'Dining chairs',
			new_price: 100,
			old_price: 120,
			rating: 5,
			offer_text: 'sale',
		},
		{
			img: 'img/products/product4.jpg',
			alt: 'photo-card',
			name: 'Chair',
			title: 'Buskbo armchair',
			new_price: 130,
			old_price: 160,
			rating: 4,
			offer_text: 'sale',
		},
		{
			img: 'img/products/product5.jpg',
			alt: 'photo-card',
			name: 'Chair',
			title: 'Modern chairs',
			new_price: 100,
			old_price: 120,
			rating: 5,
			offer_text: 'sale',
		},
		{
			img: 'img/products/product6.jpg',
			alt: 'photo-card',
			name: 'Chair',
			title: 'Plastic dining chair',
			new_price: 130,
			old_price: 150,
			rating: 5,
			offer_text: 'sale',
		},
		{
			img: 'img/products/product7.jpg',
			alt: 'photo-card',
			name: 'Chair',
			title: 'Minimal Wood chair',
			new_price: 180,
			old_price: 250,
			rating: 5,
			offer_text: 'new',
		},
		{
			img: 'img/products/product8.jpg',
			alt: 'photo-card',
			name: 'Chair',
			title: 'Elegent wood chair',
			new_price: 120,
			old_price: 150,
			rating: 4,
			offer_text: 'new',
		},
		{
			img: 'img/products/product9.jpg',
			alt: 'photo-card',
			name: 'Chair',
			title: 'Minimal LCD chair',
			new_price: 180,
			old_price: 250,
			rating: 5,
			offer_text: 'sale',
		},
		{
			img: 'img/products/product10.jpg',
			alt: 'photo-card',
			name: 'sofa',
			title: 'Modern Sofa',
			new_price: 120,
			old_price: 150,
			rating: 4,
			offer_text: 'new',
		},
		{
			img: 'img/products/product11.jpg',
			alt: 'photo-card',
			name: 'sofa',
			title: 'Microfiber Sofa',
			new_price: 130,
			old_price: 150,
			rating: 4,
			offer_text: '-30%',
		},
		{
			img: 'img/products/product12.jpg',
			alt: 'photo-card',
			name: 'tabble',
			title: 'Wood Coffee Tables',
			new_price: 100,
			old_price: 120,
			rating: 4,
			offer_text: 'sale',
		},
		{
			img: 'img/products/product13.jpg',
			alt: 'Chair',
			name: 'Chair',
			title: 'Acacia Wood Club Chairs',
			new_price: 100,
			old_price: 120,
			rating: 0,
			offer_text: '-30%',
		},
		{
			img: 'img/products/product14.jpg',
			alt: 'Bench',
			name: 'Bench',
			title: 'Amalia Cowhide Bench',
			new_price: 130,
			old_price: 150,
			rating: 4,
			offer_text: 'sale',
		},
		{
			img: 'img/products/product15.jpg',
			alt: 'Bench',
			name: 'Storage',
			title: 'Juno-Hinged Lid Storage',
			new_price: 180,
			old_price: 250,
			rating: 5,
			offer_text: 'new',
		},
		{
			img: 'img/products/product16.jpg',
			alt: 'Bench',
			name: 'Furniture',
			title: 'Delicia 3 Piece Living Room',
			new_price: 120,
			old_price: 150,
			rating: 4,
			offer_text: 'new',
		},
	];
	let itemsArr = '';

	createProductList(type);

	function createProductList(type) {
		itemsArr = '';

		if (type === 'top') {
			productArr.forEach((product) => {
				if (product.rating === 5) {
					itemsArr += createProduct(product);
				}
			});
		} else if (type === 'new' || type === 'sale') {
			productArr.forEach((product) => {
				if (product.offer_text === type) {
					itemsArr += createProduct(product);
				}
			});
		} else if (type === 'offer') {
			productArr.forEach((product) => {
				if (product.offer_text !== 'sale' && product.offer_text !== 'new') {
					itemsArr += createProduct(product);
				}
			});
		} else {
			for (let index = 0; index < 8; index++) {
				itemsArr += createProduct(productArr[index]);
			}
		}

		productField.innerHTML = itemsArr;
	}

	function createProduct(item) {
		const { img, alt, name, title, new_price, old_price, rating, offer_text } = item;

		let offerClass = offerClassObj[offer_text] ?? offerClassObj['default'];

		const product = `
			<div class="products__item card">
						<a class="card__photo" href="#">
							<img src="${img}" alt="${alt}" class="card__img">                            
						</a>
						<div class="card__info">
							<p class="card__name">${name}</p> 
							<a class="card__title" href="#">${title}</a> 
							<div class="card__options">
								<a class="card__options-link" href="#">
									<span class="card__icon icon-heart"></span>
								</a>
								<a class="card__options-link" href="#">
									<span class="card__icon icon-cart1"></span>
								</a>
								<a class="card__options-link" href="#" data-action="refresh">
									<span class="card__icon icon-loop2"></span>
								</a>
								<a class="card__options-link" href="#">
									<span class="card__icon icon-eye"></span>
								</a>
                        	</div>
						<div class="card__star-block">
							<div class="card__price">
								<div class="card__price-new">$${new_price}</div>
								<div class="card__price-old">$${old_price}</div>
							</div>
							<ul class="card__review">
								${addRating(rating)}                            
							</ul>
						</div>                         
						</div>                    
						<div class="card__offer ${offerClass}">${offer_text}</div>
					</div>
			`;
		return product;
	}

	function addRating(rating) {
		let ratingArr = '';
		for (let index = 0; index < 5; index++) {
			if (index < rating) {
				ratingArr += '<li class="card__star card__star_active icon-star-o"></li>';
			} else {
				ratingArr += '<li class="card__star icon-star-o"></li>';
			}
		}
		return ratingArr;
	}
}

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

// Timer
function timer(parrentClass, deadline) {
	const timerWrapper = document.querySelector(parrentClass);
	const day = timerWrapper.querySelector('.case__day');
	const hrs = timerWrapper.querySelector('.case__hrs');
	const min = timerWrapper.querySelector('.case__min');
	const sec = timerWrapper.querySelector('.case__sec');

	setInterval(updateClock, 1000);

	function updateClock() {
		let total = Date.parse(deadline) - Date.parse(new Date());

		let days = Math.trunc(total / (1000 * 60 * 60 * 24));
		let hours = Math.trunc((total / (1000 * 60 * 60)) % 24);
		let minutes = Math.trunc((total / (1000 * 60)) % 60);
		let seconds = Math.trunc((total / 1000) % 60);

		day.innerHTML = addZero(days);
		hrs.innerHTML = addZero(hours);
		min.innerHTML = addZero(minutes);
		sec.innerHTML = addZero(seconds);
	}

	const addZero = (num) => (num < 10 && num >= 0 ? `0${num}` : num);
}
