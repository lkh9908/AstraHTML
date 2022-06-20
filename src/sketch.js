let stars = []
// wid = 1500
// heig = 400
wid = window.innerWidth;
heig = window.innerHeight;

let starsNumber = parseInt(wid*heig/3000)
starsNumber = 200
// console.log(starsNumber)
let minSize = 0.5
let maxSize = 10
let minOpacity = 50
let maxOpacity = 200

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function setup() {
	
	canvas = createCanvas(windowWidth, windowHeight)
  canvas.position(0,0,  'fixed')
  canvas.style('z-index', '-1')
  
	for (let i = 0; i < starsNumber; i++) {
		const temp = new Star()
		stars.push(temp)
	}
}

function draw() {
  
	translate(wid / 2, heig / 2)
	background('#000')
  
  fill(255)
	for (let i = 0; i < stars.length; i++) {
		stars[i].update(-1)
		stars[i].show()
	}
}

class Star {
  constructor() {
      this.x = random(-width / 2, width / 2)
      this.y = random(-width / 2, width / 2)
      this.z = random(0, width)

      this.r = 25 + random(-2, 3)
      this.isMiss = false
      
      this.randomSize = random(minSize, maxSize)
      this.rOpacity = map(this.randomSize, minSize, maxSize, minOpacity, maxOpacity)

	}

    update(speed) {
      this.z -= speed
      if (this.z >= width) {
          this.x = random(-width / 2, width / 2)
          this.y = random(-width / 2, width / 2)
          this.z = random(0, width)
          this.isMiss = false
      }
	}

	show() {
      fill(255)
      noStroke()
      const nowX = map(this.x / this.z, -1, 1, -width / 2, width / 2)
      const nowY = map(this.y / this.z, -1, 1, -width / 2, width / 2)
      if (!this.isMiss) {
          this.sx = nowX
          this.sy = nowY
          this.isMiss = true
      }
      const nowR = map(this.z, 0, width, this.randomSize, 0)
      ellipse(nowX, nowY, nowR, nowR)
      // ellipse(nowX, nowY, this.randomSize, this.randomSize)
      

	}
}

