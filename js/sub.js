

var alert_condition

if(localStorage.getItem('sub')){

	alert_condition = localStorage.getItem('sub')

}else{

	alert_condition = false;

	localStorage.setItem('sub', alert_condition)

}



var alert = document.getElementById('alert');


if(localStorage.getItem('sub') == 'false'){

	alert.setAttribute('style', 'display: initial');
}

function sub(){


	var audio = document.getElementById("audio_buy");

	alert.setAttribute('style', 'display: none');

	comprar_pewds = 1;

	window.open("https://www.youtube.com/user/PewDiePie?sub_confirmation=1")
	
	localStorage.setItem("pewds", comprar_pewds);

	audio.play();

	localStorage.setItem('img', 31);

	localStorage.setItem('img_grande', 31);

	localStorage.setItem('color', "#F9013F");

	window.open("https://www.youtube.com/user/PewDiePie?sub_confirmation=1")

	alert_condition =true

	localStorage.setItem('sub' , alert_condition)

}

function later(){
var alert = document.getElementById('alert');

	alert.setAttribute('style', 'display: none');

	alert_condition = true

	localStorage.setItem('sub' , alert_condition)

}