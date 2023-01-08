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
