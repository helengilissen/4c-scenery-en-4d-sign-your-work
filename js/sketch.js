// Opdracht 4C: Scenery
// Opdracht 4D: Sign your work

function setup () {
  createCanvas (800,800)
  background (43, 76, 100)
}

function draw () {

  textSize(32);
  fill(0, 102, 153);
  text('Helen Gilissen', 30, 50);

  // gebouw 2 (grootste gebouw)
  // achtergrond
  noStroke ()
  fill (70,118,173)
  rect (390, 35, 155, 765)
  fill (100, 166, 215)
  rect (545, 35, 155, 765)

  // ramen
  fill (255)
  rect (410, 80, 270, 30)
  rect (410, 140, 270, 30)
  rect (410, 200, 270, 30)
  rect (410, 260, 270, 30)
  rect (410, 320, 270, 30)
  rect (410, 380, 270, 30)
  rect (410, 440, 270, 30)
  rect (410, 500, 270, 30)
  rect (410, 560, 270, 30)
  rect (410, 620, 270, 30)
    
  // // gebouw 1 (op een na grootste gebouw)
  // // basis
  noStroke()
  fill (70, 118, 173)
  rect (50, 235, 285, 600)

  fill (255)
  rect (230, 185, 95, 50 )

  // ramen
  rect (80, 270, 230, 23)
  rect (30, 320, 325, 45)
  rect (70, 770, 245, 45)
  rect (30, 385, 325, 45)

  // vierkante raampjes
  // rij 1
  rect (90, 460, 40, 50)
  rect (145, 460, 40, 50)
  rect (200, 460, 40, 50)
  rect (255, 460, 40, 50)

  // rij2
  rect (90, 525, 40, 50)
  rect (145, 525, 40, 50)
  rect (200, 525, 40, 50)
  rect (255, 525, 40, 50)

  // rij3
  rect (90, 590, 40, 50)
  rect (145, 590, 40, 50)
  rect (200, 590, 40, 50)
  rect (255, 590, 40, 50)

  //  gebouw 4 (kleinste gebouw)
  // basis
  noStroke ()
  fill (100, 166, 215)
  rect (335, 610, 155, 300)

  fill (255)
  rect ( 335, 595, 155, 15)

  // ramen
  fill (255)
  rect ( 335, 650, 130, 25)

  fill (255)
  rect ( 335, 700, 130, 25)

  fill (255)
  rect ( 335, 750, 130, 25)

  // gebouw 3 (op een na kleinste gebouw)
  // basis
  strokeWeight (5)
  fill (110, 166, 215)
  stroke (255)
  ellipse (675, 435, 150, 150)

  fill (255)
  strokeWeight (16)
  line (550,427, 800, 427) 

  noStroke()
  fill (68, 119, 175)
  rect (550, 435, 250, 400)

  // ramen
  fill (255)
  rect (580, 470, 40, 310)

  fill (255)
  rect (630, 470, 40, 310)

  fill (255)
  rect (680, 470, 40, 310)

  fill (255)
  rect (730, 470, 40, 310)
}
