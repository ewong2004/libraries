// Libary of random functions


// Inclusive
function randomDec(low, high) {
	return Math.random() * (high - low) + low;
}

// Exclusive
function randomInt(low, high) {
	return Math.floor(Math.random() * (high - low) + low);
}

function randomRGB() {
	let r = randomInt(0, 256);
	let g = randomInt(0, 256);
	let b = randomInt(0, 256);
	return 'rgb(' + r + ',' + g + ',' + b + ')'
}

function constructHex() {
	let letterOrNumber = randomInt(0, 2);
	let letter = '';
	let number = '';
	if (letterOrNumber == 0) {
		letter = randomInt(0, 6);
		if (letter == 0) {
			letter = 'A';
		} else if (letter == 1) {
			letter = 'B';
		} else if (letter == 2) {
			letter = 'C';
		} else if (letter == 3) {
			letter = 'D';
		} else if (letter == 4) {
			letter = 'E';
		} else if (letter == 5) {
			letter = 'F';
		}
	} else {
		number = randomInt(1, 10);
	}
}

function randomHex() {
	let hexColour = '#' + constructHex() + constructHex() + constructHex() + constructHex() + constructHex() + constructHex();
}