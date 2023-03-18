var canvas;
let time = 0.;
let stars = [];
let numstar = 400;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '-1');
	for (let i=0; i<numstar; i++) {
		stars[i] = [random(), random(), random()]
	}
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	noStroke();
	
	const n = 100
	let h = height / n
	for (let i=0; i<n; i++) {
		fill(i, 0, 51);
		rect(0, h*i, width, h);
	}

	for (let i=0; i<numstar; i++) {
		fill(255);
		ellipse(width * stars[i][0], height * stars[i][1], 1.2 * noise(time + 10*i) + stars[i][2]);
	}

	time = time + 0.1
}
