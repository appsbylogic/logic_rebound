
var velocidadMouse;

var movInicial;

var  movFinal;


function getDistance_y(y1, y2){



	var yDistance = y2 - y1;

	//return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

	return yDistance;

}

function getDistance_x(x1, x2){

	var xDistance = x2 - x1;



	//return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));


	return xDistance
}






setInterval(function(){

	

	if(movInicial && movFinal){

		var movX = movFinal.screenX-movInicial.screenX;


	}
	movInicial = movFinal;

	


	velocidadMouse = {

		x: 10*movX,
		y:0
	}



},100);

