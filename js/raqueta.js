function raqueta(x,y,width, height){

	this.x = window.innerWidth/2 - 75;

	this.y = window.innerHeight-90;

	this.width = width;

	this.height = height;

	this.masa = 1; 

	this.draw = function(){

		c.beginPath();
  		
  		c.shadowBlur = 0;
	
		c.fillRect(this.x,this.y,this.width,this.height);



		c.fillStyle = "white";
	


  		c.closePath();
	}

	this.update = function(){

		this.draw();
	}


}