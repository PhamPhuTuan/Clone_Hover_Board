let wrap = document.querySelector('.wrap');
let n = 150;

for (let i = 0; i < n; i++) {
    	let square = document.createElement('div');
    square.addEventListener('mouseover', () => get_color(square))
	square.addEventListener('mouseout', () => remove_color(square))
	square.classList.add('square');
	wrap.appendChild(square);
}

function get_color(square) {
	let color = generateRandomColor();
	square.style.background = color;
	square.style.boxShadow = `0 0 10px ${color}, 0 0 100px ${color}`;
}

function remove_color(square) {
	square.style.background = '#1d1d1d';
    square.style.boxShadow = `0 0 0px #000`;
}

function generateRandomColor() {
	let letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}