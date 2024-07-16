// variables globales
let drums

function preload() {
  // cargar un archivo de sonido
  drums = loadSound('assets/drums.mp3')
}

function setup() {
  createCanvas(500, 500)
  // reproduce en repetición
  drums.loop()
  background(0)
}

function draw() {
  textAlign(CENTER, CENTER)
  textSize(30)
  
  if (drums.isPlaying()) {
    background(0, 255, 0)
    fill(0)
    text("Sonando", 250, 250)
  } else {
    background(220)
    text("En pausa", 250, 250)
  }
}

function mousePressed() {
  if (drums.isPlaying()) {
    drums.stop()
  } else {
    drums.play()
  }
}

//getAudioContext().resume()