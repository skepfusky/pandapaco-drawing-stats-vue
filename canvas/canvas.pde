float x = 80;

void setup() {
  size(600, 600);
  frameRate(60);
}

void draw() {
  background(0, 107, 61);
  ellipse(x, 300, 69, 69);
  x = x + 1;
}
