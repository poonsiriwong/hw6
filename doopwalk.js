// The sound file splash.mp3 came from
// http://soundbible.com/1139-Water-Drop-Low.html

var splash;

function preload() {
  soundFormats('mp3', 'ogg');
  splash = loadSound('sounds/splash.mp3');
}

let x = 0;
function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background(204);
  x = x + 1;
  if (x > width) {
    x = 0;
  }
  rect(x, 300, 50, 100);
	rect(0, 400, width, 400);
}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}

function keyPressed() {
  if (key == 'a') {
    splash.play();
		print("doop!");
		noLoop();
  }
}
