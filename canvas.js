
var canvas = document.getElementById("canvas");
	var c = canvas.getContext("2d");
	canvas.width= window.innerWidth;
var container = document.querySelector('.container');
	
canvas.height = window.innerHeight;
var r_color = 255;
var g_color = 255;
var b_color = 255;
var score = 0;
c.font = "30px Arial";
c.strokeText("Hello World",30,50);


var mouse = {
	x: undefined,
	y: undefined
}

window.addEventListener('mousemove', function(e){

	mouse.x = e.pageX;

	mouse.y = e.pageY;

})


	


var velx = .5;

	var vely = .5;

	

	


window.addEventListener('resize', function(event){

	canvas.width= window.innerWidth;

	canvas.height = window.innerHeight;
	init();
})


var colorArray = [
	94,
	255,
	122
];

function Circle(x,y	,dx,dy,radio,r,g,b,a,color,velx,vely,direccion_x,direccion_y){
this.direccion_y = direccion_y;
this.direccion_x = direccion_x
this.velx = velx;
this.vely = vely;
this.x=x;
this.y=y;
this.dx=dx;
this.dy=dy;
this.radio=radio;
this.minRadio = radio;
this.r = r;
this.g = g;
this.b = b;
this.a = a;
this.color = color;
	
this.draw = function(){

	direccion_x= Math.floor(Math.random())

	direccion_y= Math.floor(Math.random())


	
	c.beginPath();
	c.arc(this.x,this.y,this.radio,0,Math.PI*2,false);
	
	
	c.stroke();
	c.shadowBlur = 10;
	c.shadowColor = "rgba("+this.r+","+this.g+","+this.b+",1)";;
	c.fillStyle = "rgba("+this.r+","+this.g+","+this.b+",1)";
	
	c.fill();

}
this.update = function(){

	

	

	if(mouse.x - this.x <50 && mouse.x - this.x >-50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
console.log(this.color);

this.velx=-velx;


		if(this.radio<30){

			

		this.radio+=1;
		
		//console.log(this.r);

		if(this.color == 1){
			this.g=255;
			this.r=94;
			this.b=147;
		}

		if(this.color == 0){
			this.r = 255;
			this.g=117;
			
			this.b=117;

			
		}

		if(this.color == 2){
			this.r =122;
			this.g=171;
			this.b=255;
		}

		
	
	}
	}else if(this.radio>this.minRadio){
		this.radio-=1;

	}

	this.draw();
	
}


}


var circleArray = [];



function init(){
	circleArray = [];

	for (var i=0; i<150; i++) {
	
	var radio = Math.random() * 5 +1;

	var velx = .5;

	var vely = .5

	var direccion_x= Math.random()

	var direccion_y= Math.random()
	
	var x = Math.random()* (innerWidth -radio * 2)+radio;

	var y = Math.random()* (innerHeight -radio * 2)+radio;
	
	var dx= (Math.random()*-0.5)*4;

	var dy =(Math.random()*-0.5)*4;

	var r = r_color;
	var g = g_color;
	var b = b_color;
	var a = 1;



	var color = Math.floor(Math.random()*3);

	

	circleArray.push(new Circle(x,y,dx,dy,radio,r,g,b,a,color,velx,vely,direccion_y,direccion_x));
}




}

function animar() {


	


	requestAnimationFrame(animar);
	
	c.clearRect(0,0,innerWidth,innerHeight);

	for (var i=0; i<circleArray.length;i++) {
		circleArray[i].update();

		if(circleArray[i].direccion_x<0.5 && circleArray[i].direccion_y <0.5){

			circleArray[i].x+=circleArray[i].velx;

		circleArray[i].y+=circleArray[i].vely;


		}

		if(circleArray[i].direccion_x>.5 && circleArray[i].direccion_y <0.5){

			circleArray[i].x-=circleArray[i].velx;

		circleArray[i].y+=circleArray[i].vely;


		}

		if(circleArray[i].direccion_x<.5 && circleArray[i].direccion_y >.5){

			circleArray[i].x+=circleArray[i].velx;

		circleArray[i].y-=circleArray[i].vely;


		}

		if(circleArray[i].direccion_x>.5 && circleArray[i].direccion_y >.5){

			circleArray[i].x-=circleArray[i].velx;

		circleArray[i].y-=circleArray[i].vely;


		}

		

		if(circleArray[i].x>canvas.width || circleArray[i].x<0){


			circleArray[i].velx=-circleArray[i].velx
		}

		if(circleArray[i].y>canvas.height || circleArray[i].y<0){


			circleArray[i].vely=-circleArray[i].vely
		}
	}


	
	
	
	

}

init();

animar();
