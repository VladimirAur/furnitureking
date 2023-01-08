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
