const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs img');
const prev = document.getElementById('left');
const next = document.getElementById('right');

let index = 0;

let interval = setInterval(run, 3000);

next.addEventListener('click', () => {
	index++;
	changeIndex();
	resetInterval();
})

prev.addEventListener('click', () => {
	index--;
	changeIndex();
	resetInterval();
})


const changeIndex = () => {
	if(index > img.length - 1) {
		index = 0;
	} else if(index < 0) {
		index = img.length -1;
	};
	imgs.style.transform = `translateX(${-index * 700}px)`;
}

function run() {
	index++;
	changeIndex();
}

const resetInterval = () => {
	clearInterval(interval);
	interval = setInterval(run, 3000);
}