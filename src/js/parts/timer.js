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
