var canvas;
let time = 0.;
let stars = [];
let numstar = 400;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '-1');
	for (let i=0; i<numstar; i++) {
		stars[i] = []
		stars[i][0] = width * random()
		stars[i][1] = height * random()
		stars[i][2] = random()
	}
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	noStroke();
	
	let h = 10
	const n = height / h
	for (let i=0; i<n; i++) {
		fill(i, 0, 51);
		rect(0, h*i, width, h);
	}

	for (let i=0; i<numstar; i++) {
		fill(255);
		ellipse(stars[i][0], stars[i][1], 1.2 * noise(time + 10*i) + stars[i][2]);
	}

	time = time + 0.1
}
