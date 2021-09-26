/*function setup(){
	createCanvas(900, 900)
	
}

function draw(){
	background(29, 41, 81);
	fill('yellow');
	ellipse(450, 450, 250, 250);
	translate(height/2, width/2);
	rotate(PI/180);
	fill('green');
	ellipse(600, 450, 100, 100);
*/

var captiontext;
var speed;
var redVal;
var greenVal;
var blueVal;
var colorsLs = [];
var message = "";
var colorCount = 0;
var sizeCount = 0;
var locationCount = 0;

var shapeAsize;
var shapeAY;
var shapeBsize;
var shapeBY;
var shapeCsize;
var shapeCY;
var shapeDsize;
var shapeDY;
var shapeEsize;
var shapeEY;
var shapeFsize;
var shapeFY;




function setup(){
	createCanvas(1600,950);
	colorSetup();
	redVal = random(256);
	greenVal = random(256);
	blueVal = random(256);
	shapeAsize = random(20, 151);
	shapeBsize = random(20, 151);
	shapeCsize = random(20, 151);
	shapeDsize = random(20, 151);
	shapeEsize = random(20, 151);
	shapeFsize = random(20, 151);
	shapeAY = random (-400, 400);
	shapeBY = random (-400, 400);
	shapeCY = random (-400, 400);
	shapeDY = random (-400, 400);
	shapeEY = random (-400, 400);
	shapeFY = random (-400, 400);
	scale = 1;
	speed = 2;
	speedscale = 1;
}

function colorSetup(){
	colorsLs = [];
	for (var i = 0; i < 11; i++){
		redVal = random(256);
		greenVal = random(256);
		blueVal = random(256);
		colorsLs[i] = [redVal, greenVal, blueVal];
	}
	
}

function locationChange(){
	shapeAY = random (-300, 300);
	shapeBY = random (-300, 300);
	shapeCY = random (-300, 300);
	shapeDY = random (-300, 300);
	shapeEY = random (-300, 300);
	shapeFY = random (-300, 300);
}

function sizeChange(){
	shapeAsize = random(151);
	shapeBsize = random(151);
	shapeCsize = random(151);
	shapeDsize = random(151);
	shapeEsize = random(151);
	shapeFsize = random(151);
	
}


function getColor(num){
	fill(colorsLs[num][0], colorsLs[num][1], colorsLs[num][2]);
}

/*	

function shapeSetup(){
	eclipse(random

}

function getShape(num){
	switch (num):
		case 0:
			shape00();
			break;
		case 1:
			shape01();
			break;
		case 2:
			shape02();
			break;
		case 3:
			shape03();
			break;
}

*/

function draw(){
	background(29, 41, 81);
    translate(width/2, height/2);
	fill('yellow');
	ellipse(0, 0, 250, 250);
	rotate(speed * scale * PI / 180 );
	
	getColor(1);
	ellipse(-400, shapeAY, shapeAsize, shapeAsize);
	getColor(0);
	ellipse(-350, shapeBY, shapeBsize, shapeBsize);
	getColor(2);
	ellipse(-200, shapeCY, shapeCsize, shapeCsize);
	getColor(3);
	ellipse(200, shapeDY, shapeDsize, shapeDsize);
	getColor(4);	
	ellipse(350, shapeEY, shapeEsize, shapeEsize);
	getColor(5);
	ellipse(400, shapeFY, shapeFsize, shapeFsize);
	
	scale += 1;
	//
}

	


function keyPressed(){
	if (keyCode === 67){
		colorSetup();
		colorCount += 1;
		if (colorCount > 10){
			document.getElementById("message").innerHTML = "omg ur so picky lol";
		}
	}
	if (keyCode === 76){
		locationChange();
		locationCount += 1;
		if (locationCount > 10){
			document.getElementById("message").innerHTML = "it'd be really convenient if you could just choose where to put em, huh?";
		}
	}
	if (keyCode === 83){
		sizeChange();
		sizeCount = sizeCount + 1;
		if (sizeCount > 10){
			document.getElementById("message").innerHTML = "it's almost like u think size matters :(";
		}
	}
	if (keyCode === RIGHT_ARROW){
		speed = speed + speedscale;
		if (speed > 1){
			document.getElementById("message").innerHTML = "Whoa, you're speeding up time!! How fast can it go?";
			speedscale = 1;
		}
		if (speed > 3){
			document.getElementById("message").innerHTML = "Whoa now we're going really fast! Can we go faster?"
			speedscale = 2;
		}
		if (speed > 7){
			document.getElementById("message").innerHTML = "Keep going...";
			speedscale = 4;
		}
		if (speed > 15){
			document.getElementById("message").innerHTML = "Keep going!!";
		}
		if (speed > 25){
			document.getElementById("message").innerHTML = "!!!!!!!!!";
		}
		if (speed > 30){
			document.getElementById("message").innerHTML = "You have now entered... the space kaleidoscope"
		}
	}
	else if (keyCode === LEFT_ARROW){
		speed = speed - speedscale;
		if (speed === 0){
			document.getElementById("message").innerHTML = "Congrats. You've managed to stop time."
			speedscale = 1;
		}
		else if (speed < -1){
			document.getElementById("message").innerHTML = "We're going BACK IN TIME!";
			speedscale = 1;
		}
		if (speed < -3){
			document.getElementById("message").innerHTML = "We're starting to go real back"
			speedscale = 2;
		}
		if (speed < -8){
			document.getElementById("message").innerHTML = "Whoa... this is back when Earth was still green";
			speedscale = 4
		}
		if (speed < -15){
			document.getElementById("message").innerHTML = "Keep going!!";
		}
		if (speed < -20){
			document.getElementById("message").innerHTML = "!!!!!!!!!";
		}
		if (speed < -30){
			document.getElementById("message").innerHTML = "You have now entered... the space kaleidoscope"
		}
		
	}
}


	