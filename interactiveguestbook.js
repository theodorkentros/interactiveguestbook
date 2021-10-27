/*
Project: image uploaded (1) processes sound based on color.
  One preloaded sound.
  One preloaded image overwriting.

*/

//Several starts with play equals several instances of sound. Map to alpha maybe?

/*
To-Do:

Include a way for reversed sounds to not interrupt forward sounds
  some kind of callback / "isPlaying" method for only allowing a new reverse
  (or forward in the opposite manner) sounds to be playd if there is nothing
  currently playing.

Callback so that mousePressed only works on image.


More interactive
  different sounds playing
  more values deciding more things
  longer samples

Center image different on phone and on computer

Add name to form and display name below sketch.

Possible .loop on all sounds?
*/

let tkimg;

let c;
let col1;
let col2;
let col3;
let col4;

var pluck;
var pluck1; //let?
let firstplay;

let w;
let h;


function preload() {
  tkimg = loadImage('images/images/0.jpg', imgloadsuccess);
}

function imgloadsuccess() {
  pluck = loadSound('sounds/pluck.wav');
  pluck1 = loadSound('sounds/pluck.wav', sloadsuccess);
}

function setup() {
  w = 350;
  h = 400;
  var canvas = createCanvas(w,h);
  canvas.parent('sketch'); //http://fh-potsdam.github.io/steel-ant-input-output/examples/center-canvas/
  pluck.setVolume(0.7);
  pluck1.setVolume(0.3);

  image(tkimg, 0, 0);

}

function sloadsuccess() {
  firstplay = 0;
  pluck1.loop();
}

function mousePressed() {
  if (firstplay = 0) {
    print(firstplay);
  }
  c = get(mouseX,mouseY); //creates array c[] on cordinates mouseX & mouseY
  print('image r g b a = ' + c);
  col1 = map(c[0], 0, 255, 0.13, 0.6); //add reverse later
  print('rate = ' + col1);

  /*if (col1 < 0 && col1 > -0.5) {
    col1 = random(-1, -0.6);
    print('updated faster negative rate = ' + col1);
    startsound();
  } //finetune this later
  if (col1 > 0 && col1 < 0.12) {
    col1 = random(0.14, 0.15);
    print('updated faster rate = ' + col1);
    startsound();
  }*/ //for later implementing reverse sounds

  col2 = map(c[1], 0, 255, -1, 1);
//  print('pan = ' + col2);
  col3 = map(c[2], 0, 255, 0.4, 1);
//  print('vol = ' + col3);

  pluck.pan(col2);
  //map col3 to different sounds;
  startsound();
  pluck1.rate(col1*1.11);

}

function startsound() {
  pluck.play();
}

function draw() {
  background(255); //random(255)
  image(tkimg, 0, 0, 350, 400); //when 800 w/4, h/4, w/2, h/2

  pluck.rate(col1);//c[1]/c[3]);//sliderRate.value());
}
