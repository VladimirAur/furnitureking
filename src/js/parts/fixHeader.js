// Fix header
function fixHeader() {
	const header = document.querySelector('.header');

	let lastPosittion = 0;
	window.addEventListener('scroll', () => {
		let currentPosition = scrollY;
		if (lastPosittion > currentPosition) {
			header.classList.add('header_fixed');
			document.body.style.paddingTop = header.clientHeight + 'px';
		} else if (lastPosittion < currentPosition) {
			header.classList.remove('header_fixed');
			document.body.style.paddingTop = 0;
		}
		// if (scrollY > 1) {
		// 	header.classList.add('header_fixed');
		// 	document.body.style.paddingTop = header.clientHeight + 'px';
		// } else {
		// 	header.classList.remove('header_fixed');
		// 	document.body.style.paddingTop = 0;
		// }
		lastPosittion = currentPosition;
	});
}
