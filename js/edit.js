var blur = 30;
var shown = 0;
var interval;
var default_img;
var prueba_in
var cambiar =0;
var cambiar_img =0;
var color = "red";
var texto = document.getElementById("select")
var comprar_ying = 0;
var comprar_rubik = 0;
var comprar_mexico = 0;
var comprar_pac = 0;
var comprar_godzilla=0;
var comprar_russia=0;
var comprar_alemania=0;
var comprar_portugal=0;
var comprar_brasil=0;
var comprar_argentina=0;
var comprar_españa=0;
var comprar_inglaterra =0;
var comprar_wefere=0;
var comprar_francia=0;
var comprar_prohibido = 0;
var comprar_corazon=0;
var comprar_gear=0;
var comprar_aim=0;
var comprar_avion=0;
var comprar_tierra=0;
var comprar_spinner=0;
var comprar_music=0;
var comprar_illuminati=0;
var comprar_angry=0;
var comprar_canada = 0;
var comprar_ace = 0;
var comprar_cookie=0;
var comprar_sword = 0;
var comprar_pencil=0;

var contador=1;

var r_coin = 255;

var g_coin =255;

var b_coin =255;

var tope_coin=0;

var buy_fail = 0;

var r=255;
var g=0;
var b=0;
var tope = 0;
var imagen_boton = 0;
function abrir_editar(){

	/*AdMob.prepareInterstitial({
   		adId: 'ca-app-pub-4382391968703736/5125467273',
    
    	autoShow: true

  	});*/
	

	document.getElementById("menu").setAttribute("style", "visibility: hidden")

	var precio = document.getElementById("prize_text")

	var precio_img = document.getElementById("prize")

	var boton_compar = document.getElementById("buy")

	if(localStorage.getItem("ying")){
		comprar_ying=localStorage.getItem("ying")
	}

	if(localStorage.getItem("canada")){
		comprar_canada=localStorage.getItem("canada")
	}

	if(localStorage.getItem("pac")){
		comprar_pac=localStorage.getItem("pac")
	}
	if(localStorage.getItem("mexico")){
		comprar_mexico=localStorage.getItem("mexico")
	}
	if(localStorage.getItem("rubik")){
		comprar_rubik=localStorage.getItem("rubik")
	}
	if(localStorage.getItem("godzilla")){

		comprar_godzilla=localStorage.getItem("godzilla")
	}
	if(localStorage.getItem("francia")){

		comprar_francia=localStorage.getItem("francia")
	}
	if(localStorage.getItem("portugal")){

		comprar_portugal=localStorage.getItem("portugal")
	}
	if(localStorage.getItem("españa")){

		comprar_españa=localStorage.getItem("españa")
	}
	if(localStorage.getItem("brasil")){

		comprar_brasil=localStorage.getItem("brasil")
	}
	if(localStorage.getItem("argentina")){

		comprar_argentina=localStorage.getItem("argentina")
	}
	if(localStorage.getItem("wefere")){

		comprar_wefere=localStorage.getItem("wefere")
	}
	if(localStorage.getItem("inglaterra")){

		comprar_inglaterra=localStorage.getItem("inglaterra")
	}
	if(localStorage.getItem("alemania")){

		comprar_alemania=localStorage.getItem("alemania")
	}
	if(localStorage.getItem("russia")){

		comprar_russia=localStorage.getItem("russia")
	}
	if(localStorage.getItem("prohibido")){

		comprar_prohibido=localStorage.getItem("prohibido")
	}
	if(localStorage.getItem("corazon")){

		comprar_corazon=localStorage.getItem("corazon")
	}
	if(localStorage.getItem("spinner")){

		comprar_spinner=localStorage.getItem("spinner")
	}
	if(localStorage.getItem("illuminati")){

		comprar_illuminati=localStorage.getItem("illuminati")
	}
	if(localStorage.getItem("avion")){

		comprar_avion=localStorage.getItem("avion")
	}
	if(localStorage.getItem("gear")){

		comprar_gear=localStorage.getItem("gear")
	}
	if(localStorage.getItem("tierra")){

		comprar_tierra=localStorage.getItem("tierra")
	}
	if(localStorage.getItem("angry")){

		comprar_angry=localStorage.getItem("angry")
	}
	if(localStorage.getItem("music")){

		comprar_music=localStorage.getItem("music")
	}
	if(localStorage.getItem("aim")){

		comprar_aim=localStorage.getItem("aim")
	}

	if(localStorage.getItem('img')){
		cambiar = localStorage.getItem('img')
	}else{
		cambiar=0;

		precio.setAttribute("style", "visibility:hidden")

		precio_img.setAttribute("style", "visibility:hidden")
	}

	if(localStorage.getItem('color')){
		color=localStorage.getItem('color')
	}else{
		color="red"
	}

	if(localStorage.getItem('img_grande')){

	cambiar_img = localStorage.getItem('img_grande')

	contador = parseInt(localStorage.getItem('img_grande'))+1

	document.getElementById("counter").innerHTML = contador + "/30"

	
		}else{
			cambiar_img =0
			contador=1;

	document.getElementById("counter").innerHTML = contador + "/30"
		}
	if(localStorage.getItem('shadow')){
		blur = localStorage.getItem('shadow')
	}else{
		blur=50;
	}
	shown=1
	
	var canvas = document.getElementById("canvas_edit");
	
	var c = canvas.getContext('2d');
	
	var width = window.innerWidth;
	
	var height = window.innerHeight;
	
	canvas.height=height;
	
	canvas.width=width;


	document.getElementById("coin_img").setAttribute("style", "visibility: visible");

	document.getElementById("coin").setAttribute("style", "visibility: visible");
	
	
	var page = document.getElementById("page");
	
	var div_edit = document.getElementById("div_edit");
	
	div_edit.setAttribute("style", "visibility: visible")
	
	
	
	page.setAttribute("style", "visibility: hidden");

	interval = setInterval(function(){


document.getElementById("coin").setAttribute("style", "visibility: visible");

		if(buy_fail==1){
document.getElementById("coin").style.color = "rgb("+r_coin+","+g_coin+","+b_coin+")";


			if(b_coin>0 && g_coin>0 && tope_coin==0){

				
			
			b_coin-=6;

			g_coin-=6

			if(b_coin<=0 && g_coin<=0){
				tope_coin=1;
			}

		}

		if(tope_coin==1 && b_coin<255 && g_coin<255){

			//document.getElementById("coin").setAttribute("style", "color: rgb("+r_coin+","+g_coin+","+b_coin+");")

			b_coin+=6;

			g_coin+=6;

			if(b_coin>=255 && g_coin>=255){
				tope_coin=0;
				buy_fail=0;
			}


		}



			
		}
			

		if(cambiar_img==0){
			
			default_img = document.getElementById("default")

			select.innerHTML = "default"
			
			color= "red"
			
			imagen_boton=1;
			

			boton_compar.setAttribute("style", "visibility: visible")

			boton_compar.src="img/select.png"

			precio.setAttribute("style", "visibility:hidden")

			precio_img.setAttribute("style", "visibility:hidden")

			document.getElementById("izquierda").setAttribute("style", "visibility: hidden")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")


		
		}else if(cambiar_img==5){


			boton_compar.setAttribute("style", "visibility: visible")
		
			default_img = document.getElementById("prueba")

			color = "#e6e9ef";

			select.innerHTML = "Ying Yang"
		
			

			precio.innerHTML = 20;

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("ying") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;
			}

		
		}else if(cambiar_img==6){


			boton_compar.setAttribute("style", "visibility: visible")
		
			default_img = document.getElementById("cookie")

			color = "#967052";

			select.innerHTML = "Cookie"
		
			

			precio.innerHTML = 20;

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("cookie") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;
			}

		
		}else if(cambiar_img==7){


			boton_compar.setAttribute("style", "visibility: visible")
		
			default_img = document.getElementById("ace")

			color = "#62a7fc";

			select.innerHTML = "ace"
		
			

			precio.innerHTML = 20;

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("ace") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;
			}

		
		}else if(cambiar_img==8){


			boton_compar.setAttribute("style", "visibility: visible")
		
			default_img = document.getElementById("pencil")

			color = "#fff187";

			select.innerHTML = "Pencil"
		
			

			precio.innerHTML = 25;

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("pencil") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;
			}

		
		}else if(cambiar_img==9){


			boton_compar.setAttribute("style", "visibility: visible")
		
			default_img = document.getElementById("sword")

			color = "#c6c6c6";

			select.innerHTML = "Sword"
		
			

			precio.innerHTML = 30;

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("sword") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;
			}

		
		}else if(cambiar_img==11){

			boton_compar.setAttribute("style", "visibility: visible")

			default_img = document.getElementById("pacman")

			color = "#fffc75";

			precio.innerHTML = 35;

			select.innerHTML = "Pac Guy"
		
			

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("pac") == 1){

				precio.setAttribute("style", "visibility:hidden")

			precio_img.setAttribute("style", "visibility:hidden")

			imagen_boton=1;
				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;

			}

		}else if(cambiar_img==18){	

			boton_compar.setAttribute("style", "visibility: visible")

			default_img = document.getElementById("rubik")

			color = "rgb("+r+", "+g+", "+b+")";

			select.innerHTML = "Magic cube"

			precio.innerHTML = 50;
			
			

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("rubik") == 1){

				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;

			}

		if(g<255 && tope ==0){
				
			g+=3;

			if(g>=255){

				tope = 1;
			}
		}

	if(r>0 && tope ==1){
		r-=3
		if(r<=0){
			tope=2
		}

	}

	if(b<255 && tope==2){

		b+=3

		if(b>=255){

			tope=3
		}
	}

	if(tope==3 && g>0){
		g-=3

		if(g<=0){

			tope=4
		}
	}

	if(r<255 && tope ==4){
		r+=3

		if(r>=255){
			tope = 5
		}
	}

	if(tope==5 && b>0){

		b-=3

		if(b<=0){

			tope=0;
		}

	}

		}else if(cambiar_img==19){

			boton_compar.setAttribute("style", "visibility: visible")

			default_img = document.getElementById("godzilla")

			color = "#00ff55";


			precio.innerHTML = "0";



			select.innerHTML = "Godzilla"
			

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("godzilla") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/video.png"

				imagen_boton=0;

			}

		}else if(cambiar_img==20){

			boton_compar.setAttribute("style", "visibility: visible")

			default_img = document.getElementById("mexico")

			color = "#00ff55";

			precio.innerHTML = 30;

			select.innerHTML = "México"
			

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("mexico") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;

			}

		}else if(cambiar_img==21){

			boton_compar.setAttribute("style", "visibility: visible")

			default_img = document.getElementById("russia")

			color = "#5694ff";


			precio.innerHTML = "30";



			select.innerHTML = "Russia"
			

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("russia") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;

			}

		}else if(cambiar_img==22){

			boton_compar.setAttribute("style", "visibility: visible")

			default_img = document.getElementById("alemania")

			color = "#fff023";


			precio.innerHTML = "30";



			select.innerHTML = "Germany"
			

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("alemania") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;

			}

		}else if(cambiar_img==23){

			boton_compar.setAttribute("style", "visibility: visible")

			default_img = document.getElementById("brasil")

			color = "#3dff70";


			precio.innerHTML = "30";



			select.innerHTML = "Brazil"
			

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("brasil") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;

			}

		}else if(cambiar_img==24){

			boton_compar.setAttribute("style", "visibility: visible")

			default_img = document.getElementById("portugal")

			color = "#ff3d3d";


			precio.innerHTML = "30";



			select.innerHTML = "Portugal"
			

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("portugal") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;

			}

		}else if(cambiar_img==25){

			boton_compar.setAttribute("style", "visibility: visible")

			default_img = document.getElementById("españa")

			color = "#fff359";


			precio.innerHTML = "30";


			select.innerHTML = "Spain"
			

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("españa") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;

			}

		}else if(cambiar_img==26){

			boton_compar.setAttribute("style", "visibility: visible")

			default_img = document.getElementById("argentina")

			color = "#63e2ff";


			precio.innerHTML = "30";


			select.innerHTML = "Argentina"
			

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("argentina") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;

			}

		}else if(cambiar_img==27){

			boton_compar.setAttribute("style", "visibility: visible")

			default_img = document.getElementById("inglaterra")

			color = "#ff3d3d";


			precio.innerHTML = "30";


			select.innerHTML = "England"
			

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("inglaterra") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;

			}

		}else if(cambiar_img==28){

			boton_compar.setAttribute("style", "visibility: visible")

			default_img = document.getElementById("francia")

			color = "#2f3fed";


			precio.innerHTML = "30";


			select.innerHTML = "France"
			

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("francia") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;

			}

		}else if(cambiar_img==17){

			boton_compar.setAttribute("style", "visibility: visible")

			default_img = document.getElementById("wefere")

			color = "rgb("+r+","+g+","+b+")";

			if(g<255 && tope ==0){
				
			g+=3;

			if(g>=255){

				tope = 1;
			}
		}

	if(r>0 && tope ==1){
		r-=2
		if(r<=0){
			tope=2
		}

	}

	if(b<255 && tope==2){

		b+=2

		if(b>=255){

			tope=3
		}
	}

	if(tope==3 && g>0){
		g-=2

		if(g<=0){

			tope=4
		}
	}

	if(r<255 && tope ==4){
		r+=2

		if(r>=255){
			tope = 5
		}
	}

	if(tope==5 && b>0){

		b-=2

		if(b<=0){

			tope=0;
		}

	}

			

			precio.innerHTML = "50";


			select.innerHTML = "Wefere"
			

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("wefere") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;

			}

		}else if(cambiar_img==1){

			boton_compar.setAttribute("style", "visibility: visible")

			default_img = document.getElementById("gear")

			color = "#fff34f";


			precio.innerHTML = "15";



			select.innerHTML = "Gear"
			

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("gear") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;

			}

		}else if(cambiar_img==10){

			boton_compar.setAttribute("style", "visibility: visible")

			default_img = document.getElementById("prohibido")

			color = "#ff2121";


			precio.innerHTML = "30";



			select.innerHTML = "Forbidden"
			

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("prohibido") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;

			}

		}else if(cambiar_img==2){

			boton_compar.setAttribute("style", "visibility: visible")

			default_img = document.getElementById("corazon")

			color = "#ff5b5b";


			precio.innerHTML = "20";



			select.innerHTML = "Heart"
			

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("corazon") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;

			}

		}else if(cambiar_img==15){

			boton_compar.setAttribute("style", "visibility: visible")

			default_img = document.getElementById("aim")

			color = "#ff5656";


			precio.innerHTML = "40";



			select.innerHTML = "Target"
			

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("aim") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;

			}

		}else if(cambiar_img==4){

			boton_compar.setAttribute("style", "visibility: visible")

			default_img = document.getElementById("music_img")

			color = "#e100ff";


			precio.innerHTML = "20";



			select.innerHTML = "Musical Note"
			

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("music") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;

			}

		}else if(cambiar_img==3){

			boton_compar.setAttribute("style", "visibility: visible")

			default_img = document.getElementById("spinner")

			color = "#5bff89";


			precio.innerHTML = "20";



			select.innerHTML = "Spinner"
			

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("spinner") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;

			}

		}else if(cambiar_img==12){

			boton_compar.setAttribute("style", "visibility: visible")

			default_img = document.getElementById("avion")

			color = "#11d4fc";


			precio.innerHTML = "35";



			select.innerHTML = "Plane"
			

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("avion") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;

			}

		}else if(cambiar_img==13){

			boton_compar.setAttribute("style", "visibility: visible")

			default_img = document.getElementById("illuminati")

			color = "#02ff84";


			precio.innerHTML = "35";



			select.innerHTML = "Illuminati"
			

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("illuminati") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;

			}

		}else if(cambiar_img==14){

			boton_compar.setAttribute("style", "visibility: visible")

			default_img = document.getElementById("angry")

			color = "#ff9456";


			precio.innerHTML = "40";



			select.innerHTML = "Angry react"
			

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("angry") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;

			}

		}else if(cambiar_img==16){

			boton_compar.setAttribute("style", "visibility: visible")

			default_img = document.getElementById("tierra")

			color = "#78ff30";


			precio.innerHTML = "45";



			select.innerHTML = "Earth"
			

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: visible")

			if(localStorage.getItem("tierra") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;

			}

		}else if(cambiar_img==29){

			boton_compar.setAttribute("style", "visibility: visible")

			default_img = document.getElementById("canada")

			color = "red";


			precio.innerHTML = "30";


			select.innerHTML = "Canada"
			

			precio.setAttribute("style", "visibility:visible")

			precio_img.setAttribute("style", "visibility:visible")

			document.getElementById("izquierda").setAttribute("style", "visibility: visible")

			document.getElementById("derecha").setAttribute("style", "visibility: hidden")

			if(localStorage.getItem("canada") == 1){


				precio.setAttribute("style", "visibility:hidden")

				precio_img.setAttribute("style", "visibility:hidden")

				imagen_boton=1;

				boton_compar.src = "img/select.png"

			}else{

				precio.setAttribute("style", "visibility:visible")

				precio_img.setAttribute("style", "visibility:visible")

				boton_compar.src = "img/buy.png"

				imagen_boton=0;

			}
		}

//------------------------FIN PELOTAS------------------------------------------------------------------------------------------------

 		c.clearRect(0,0,width,height)

 		c.imageSmoothingEnabled = false;
 		
 		c.shadowBlur=blur;
		
		c.shadowColor=color
 		
 		c.drawImage(default_img,width/2-50,window.innerHeight/2-150);

 		

 		var shadow = document.getElementById("shadow")

 		if(blur==0){
		
		
			shadow.src = "img/luz_off.png"
			}else{
		
		shadow.src = "img/luz_on.png"
	}

 		

 	},10)

}

function blur_color(){
	
	if(blur==0){
		blur=30;
		document.getElementById("shadow").src = "img/luz_on.png"
	}else{
		blur=0;
		document.getElementById("shadow").src = "img/luz_off.png"
	}

	localStorage.setItem('shadow', blur);

}

function cambiar_skin_derecha(){

	contador+=1

	document.getElementById("counter").innerHTML = contador + "/30"

	if(cambiar_img<30){
		cambiar_img++;
		cambiar=cambiar_img

	}

	

	

	

		
}

function cambiar_skin_izquierda(){

	contador-=1

	document.getElementById("counter").innerHTML = contador + "/30"
	
	if(cambiar_img>0){

		cambiar_img--;
		cambiar=cambiar_img
	}
}

function comprar(){




			var audio = document.getElementById("audio_buy");

		var audio_fail = document.getElementById("audio_buy_fail");


		if(imagen_boton==1){


		localStorage.setItem('img', cambiar);

		localStorage.setItem('img_grande', cambiar_img);

		localStorage.setItem('color', color);

		audio.play();

	}



	if(localStorage.getItem("coins") >= parseInt(document.getElementById("prize_text").textContent)){


		audio.play();


		if(comprar_ying==0 && cambiar_img==5){
			
			comprar_ying = 1;

			localStorage.setItem("ying", comprar_ying);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);

		}

		if(comprar_pac==0 && cambiar_img==11){
			
			comprar_pac = 1;

			localStorage.setItem("pac", comprar_pac);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);

		}

		if(comprar_rubik==0 && cambiar_img==18){

			comprar_rubik = 1;

			localStorage.setItem("rubik", comprar_rubik);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);

		}

		if(comprar_mexico==0 && cambiar_img==20){
			
			comprar_mexico = 1;

			localStorage.setItem("mexico", comprar_mexico);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);

		}

		if(comprar_russia==0 && cambiar_img==21){
			
			comprar_russia = 1;

			localStorage.setItem("russia", comprar_russia);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);

		}

		if(comprar_alemania==0 && cambiar_img==22){
			
			comprar_alemania = 1;

			localStorage.setItem("alemania", comprar_alemania);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);

		}

		if(comprar_brasil==0 && cambiar_img==23){
			
			comprar_brasil = 1;

			localStorage.setItem("brasil", comprar_brasil);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);

		}

		if(comprar_portugal==0 && cambiar_img==24){
			
			comprar_portugal = 1;

			localStorage.setItem("portugal", comprar_portugal);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);

		}

		if(comprar_godzilla==0 && cambiar_img==19){

			window.open("https://www.youtube.com/watch?v=_gJPmC5rOa4","_blank")

			comprar_godzilla = 1;

			localStorage.setItem("godzilla", comprar_godzilla);

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);


		}

		if(comprar_españa==0 && cambiar_img==25){

			comprar_españa = 1;

			localStorage.setItem("españa", comprar_españa);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);


		}

		if(comprar_argentina==0 && cambiar_img==26){

			comprar_argentina = 1;

			localStorage.setItem("argentina", comprar_argentina);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);


		}

		if(comprar_inglaterra==0 && cambiar_img==27){

			comprar_inglaterra = 1;

			localStorage.setItem("inglaterra", comprar_inglaterra);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);


		}

		if(comprar_francia==0 && cambiar_img==28){

			comprar_francia = 1;

			localStorage.setItem("francia", comprar_francia);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);


		}

		if(comprar_wefere==0 && cambiar_img==17){


			comprar_wefere = 1;

			localStorage.setItem("wefere", comprar_wefere);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);


		}
		if(comprar_aim==0 && cambiar_img==15){

			comprar_aim = 1;

			localStorage.setItem("aim", comprar_aim);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);


		}

		if(comprar_music==0 && cambiar_img==4){

			comprar_music = 1;

			localStorage.setItem("music", comprar_music);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);


		}

		if(comprar_angry==0 && cambiar_img==14){

			comprar_angry = 1;

			localStorage.setItem("angry", comprar_angry);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);


		}

		if(comprar_illuminati==0 && cambiar_img==13){

			comprar_illuminati = 1;

			localStorage.setItem("illuminati", comprar_illuminati);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);


		}

		if(comprar_avion==0 && cambiar_img==12){

			comprar_avion = 1;

			localStorage.setItem("avion", comprar_avion);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);


		}
		if(comprar_prohibido==0 && cambiar_img==10){

			comprar_prohibido = 1;

			localStorage.setItem("prohibido", comprar_prohibido);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);


		}

		if(comprar_spinner==0 && cambiar_img==3){

			comprar_spinner = 1;

			localStorage.setItem("spinner", comprar_spinner);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);


		}

		if(comprar_corazon==0 && cambiar_img==2){

			comprar_corazon = 1;

			localStorage.setItem("corazon", comprar_corazon);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);


		}

		if(comprar_gear==0 && cambiar_img==1){

			comprar_gear = 1;

			localStorage.setItem("gear", comprar_gear);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);


		}

		if(comprar_tierra==0 && cambiar_img==16){

			comprar_tierra = 1;

			localStorage.setItem("tierra", comprar_tierra);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);


		}

		if(comprar_canada==0 && cambiar_img==29){

			comprar_canada = 1;

			localStorage.setItem("canada", comprar_canada);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);


		}

		if(comprar_cookie==0 && cambiar_img==6){

			comprar_cookie = 1;

			localStorage.setItem("cookie", comprar_cookie);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);


		}

		if(comprar_ace==0 && cambiar_img==7){

			comprar_ace = 1;

			localStorage.setItem("ace", comprar_ace);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);


		}

		if(comprar_pencil==0 && cambiar_img==8){

			comprar_pencil = 1;

			localStorage.setItem("pencil", comprar_pencil);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);


		}

		if(comprar_sword==0 && cambiar_img==9){

			comprar_sword = 1;

			localStorage.setItem("sword", comprar_sword);

			coins = parseInt(localStorage.getItem("coins")-parseInt(document.getElementById("prize_text").textContent))

			localStorage.setItem("coins", coins)

			localStorage.setItem('img', cambiar);

			localStorage.setItem('img_grande', cambiar_img);

			localStorage.setItem('color', color);


		}



	}else if(imagen_boton==0){

		buy_fail=1;

		audio_fail.play();
	}

	if(localStorage.getItem("coins")){

		document.getElementById("coin").innerHTML = localStorage.getItem("coins")
	}else{

		document.getElementById("coin").innerHTML = 0;
	}
}





var musica = 0;

var sonido = 0;

function quitar_musica(){

	var audio = document.getElementById("audio");

	if(localStorage.getItem("musica")){

		if(localStorage.getItem("musica")==0){
		
		document.getElementById("music").src = "img/sound_off.png"

		musica=1

		localStorage.setItem("musica",musica)

		audio.pause();
	}else{

		document.getElementById("music").src = "img/sound.png"

		musica=0

		localStorage.setItem("musica",musica)

		audio.play();

	}
}else{

	musica=1;

	document.getElementById("music").src = "img/sound_off.png"

	localStorage.setItem("musica",musica);

	audio.pause();
}

}

function quitar_sonido(){

	var audio_lose = document.getElementById("audio_lose");

	var audio_score = document.getElementById("audio_score");

	if(audio_score.volume == 1){
		audio_lose.volume=0;

		audio_score.volume=0;

		document.getElementById("sound").src = "img/music_off.png"



		sonido=0;

		localStorage.setItem("sonido",sonido);
	}else if(audio_score.volume==0){

		document.getElementById("sound").src = "img/music.png"
		audio_lose.volume=1;

		audio_score.volume=1;
		sonido=1;
		localStorage.setItem("sonido",sonido)
	}

}

function back(){
	clearInterval(interval);
	page.setAttribute("style","visibility:visible")
	div_edit.setAttribute("style", "visibility: hidden")
	document.getElementById("buy").setAttribute("style", "visibility: hidden")
	document.getElementById("prize").setAttribute("style", "visibility:hidden")
	document.getElementById("prize_text").setAttribute("style", "visibility:hidden")
	document.getElementById("izquierda").setAttribute("style", "visibility: hidden")
	document.getElementById("derecha").setAttribute("style", "visibility: hidden")
	document.getElementById("menu").setAttribute("style", "visibility: visible");

	
	
}

function borrar(){
	
	localStorage.clear();
}