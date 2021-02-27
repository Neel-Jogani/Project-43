function setup(){
  createCanvas(1000,1000);

  angleMode(DEGREES);

}

function draw(){
  background("black");

  fill("yellow");
  textSize(30);
  text("Clock: shows real time", 370,200)
  translate(500,500);
  rotate(270);
  var h= hour();
  var m=minute();
  var s= second();

  var secondAngle= map(s, 0, 60, 0, 360);
  push();
  rotate(secondAngle);
  stroke("red");
  strokeWeight(10);
  line(0,0,100,0);
  pop();

  var minuteAngle= map(m, 0, 60, 0, 360);
  push();
  rotate(minuteAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0, 75,0);
  pop();

  var hourAngle= map(h,0, 12, 0, 360);
  push();
  rotate(hourAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0, 50,0);
  pop();

  noFill();
  stroke(255,0,0);
  strokeWeight(7);
  arc(0,0,300,300,0,secondAngle)

  stroke(0,255,0);
  strokeWeight(7);
  arc(0,0,280,280,0,minuteAngle)

  stroke(0,0,255);
  strokeWeight(7);
  arc(0,0,260,260,0,hourAngle)
}
