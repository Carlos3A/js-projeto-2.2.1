let cor;
let circuloX; // x
let circuloY; // Y

function setup() {
  createCanvas(400, 400); // width x height
  background(200, 5, 50);
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  circuloX = [0, 0, 0];
  circuloY = [random(height), random(height), random(height)];
}

function draw() {
  fill(cor);

  //console.log(circuloX.lenght);
  for (let contador in circuloX) {
    // console.log(contador);
    circle(circuloX[contador], circuloY[contador], 50);
    circuloX[contador] += random(0, 10);
    circuloY[contador] += random(-3, 10);

    if (circuloX[contador] >= width) {
      circuloX[contador] = 0;
      circuloY[contador] = random(height);
    }
  }
