var playerID;
var s;

var juego_activo;

var perder;

var pausa;

var coins = 0;

var coins_partida = 0;

var play = 0;

var constants = constants || {}
constants.LEAD_HIGH_SCORE = 'CgkIxIz4jasYEAIQAA';



document.addEventListener("visibilitychange", function() {
  var audio = document.getElementById("audio");

  		if(document.visibilityState === "hidden"){

  			audio.pause();
  			
  		}else if(document.visibilityState==="visible"){

  			if(localStorage.getItem("musica")){
  				if(localStorage.getItem("musica")==0){
  					audio.play();
  				}  			
  			}else{
  				audio.play();
  			}

  		}

  	

});


function ocultar(){
	cambiar = localStorage.getItem('img');

	document.getElementById("coin_img").setAttribute("style", "visibility: hidden");

	document.getElementById("coin").setAttribute("style", "visibility: hidden");


	document.getElementById("menu").setAttribute("style", "visibility: hidden");

	document.getElementById("pausa").setAttribute("style", "visibility: visible");

	document.getElementById("juego").setAttribute("style", "visibility: visible");
	
	

	juego_activo = false;


    close_m=0;
    menu_perder=0;

    

	
	startGame();
}

var high_score = 0;

window.onload = function(){


	var audio = document.getElementById("audio");

	var audio_lose = document.getElementById("audio_lose");

	var audio_score = document.getElementById("audio_score");

	if(localStorage.getItem("sonido")){

		if(localStorage.getItem("sonido")==1){
			document.getElementById("sound").src = "img/music.png"
		}else{
			document.getElementById("sound").src = "img/music_off.png"
		}

		audio_lose.volume = localStorage.getItem("sonido")

		audio_score.volume = localStorage.getItem("sonido")


	}else{

		audio_lose.volume = 1;

		audio_score.volume = 1;
	}

	if(localStorage.getItem("musica")){

	if(localStorage.getItem("musica")==0){

		document.getElementById("music").src = "img/sound.png"

		audio.play();


	}else{

		document.getElementById("music").src = "img/sound_off.png"
		audio.pause();
	}
}else{
	audio.play();
}
	
}


function startGame(){

document.getElementById("score").innerHTML = "";

var boton_pausa = document.getElementById("pausa");

var menu_perder = 0;

var canvas = document.getElementById("canvas");

var c = canvas.getContext("2d");


var imagen_pausa = document.getElementById("imagen")

var menu_pausa = document.getElementById("menu_pausa");

var menu_pausa_width = 0;

var menu_pausa_height = window.innerHeight/1;

imagen_width = window.innerWidth/1;

imagen_height = 0;

canvas.width = window.innerWidth-10;

canvas.height = window.innerHeight-10;

var canvas_height = window.innerHeight-10
var canvas_width = window.innerWidth-10

//-------------------RAQUETAS---------------------------------
var x_r = window.innerWidth/2-75;
var y_r = window.innerHeight-90;
var r_width = 150
//------------------SCORE-------------------------------------
var x_text = window.innerWidth/2-30;
var score = 0;
//-----------------------PELOTA-------------------------------------
var x =Math.random()*(canvas_width-20);
var y = 10;
var ball_over_r=0;
var velx = 5;
var vely = 5;
var radio=10;
var ball = new Ball(x,y,radio,velx,vely);


//----------------------PAUSA---------------------------------------
var touch_x;
var touch_y;
var close_m =0;
var menu=false;
var poner_menu = false;
var borrar_todo = 0;
//------------------------PORTALES------------------------------------
var portal_posicion
var portal_altura=0;
var portal_ancho=31;
var portal_x = 0;
var portal_y = Math.random()*(window.innerHeight-portal_altura);
var draw = false;
var close = false;
var cerrar_portales = 0;
var tiempo=0;

//------------------------------POWER-UPS--------------------------
var power_x
var power_y
var power_radio
var visible = false;
var cerrar = false;
var poder;
var power_posicion;
var velocidad = false;
var lentitud =false;
var puntos_doble = false;
var aparecer=false;


//--------------------------CONTROLES----------------------------
var mouse ={ 
	
	x:undefined,
	
	y:undefined

	}

var touch_2

var touch=[];

var touch_length = touch[touch.length]

var mouse_pos =[]

var mouse_length;

var mouse_length_2;

var mouse_resultado;

var usar_mouse = true;


//-----------------------------------MOVIMIENTO MOUSE-------------------------------------------


//-----------------------------------MOVIMIENTO TOUCH-------------------------------------------

window.addEventListener("touchmove", function(event){

	usar_mouse = false
	
	mouse.x = event.targetTouches[0].pageX-(r_width/2);

	touch.push(mouse.x)

	touch_length = touch.slice(-1)[0]
	
    touch_length_2 = touch.slice(-2)[0]
	
    touch_resultado = touch_length_2-touch_length
	
	if(poner_menu===false){

		x_r = mouse.x;

	}else{

		x_r=0;
	}

},false)

window.addEventListener("touchstart",function(event){

    if(menu_perder==1 || poner_menu===true){

	   touch_2 = event.targetTouches[0];
	
	   touch_x= touch_2.clientX;

	   touch_y = touch_2.clientY;
    }

},false)

window.addEventListener('mousemove', function(event){

	

	usar_mouse = false
	
	mouse.x = event.clientX-r_width/2;

	touch.push(mouse.x)

	touch_length = touch.slice(-1)[0]
	
    touch_length_2 = touch.slice(-2)[0]
	
    touch_resultado = touch_length_2-touch_length
	
	if(poner_menu===false){

		x_r = mouse.x;

	}else{

		x_r=0;
	}




})

window.addEventListener('mousedown', function(event){

	

	if(menu_perder==1 || poner_menu===true){

	   touch_2 = event.clientX;
	
	   touch_x= event.clientX;

	   touch_y = event.clientY;
    }



})
//-----------------------------------RESIZE-------------------------------------------

window.addEventListener('resize', function(event){

	canvas.width= window.innerWidth;

	canvas.height = window.innerHeight;

})



if(localStorage.getItem('img')){
		cambiar = localStorage.getItem('img')
	}else{
		cambiar=0;
	}

	if(localStorage.getItem('color')){
		color=localStorage.getItem('color')
	}else{
		color="red"
	}
  

    if(cambiar==0){
   		
   		 prueba_in = document.getElementById("default_in_game")
	
	}else if(cambiar==5){
	
		prueba_in = document.getElementById("prueba_in_game")
	
	}else if(cambiar==11){
	
		prueba_in = document.getElementById("pacman_in_game")
	
	}else if(cambiar==18){

		prueba_in = document.getElementById("rubik_in_game")



	}else if(cambiar==19){
	
		prueba_in = document.getElementById("godzilla_in_game")
	
	}else if(cambiar==20){

		prueba_in = document.getElementById("mexico_in_game")
	}else if(cambiar==21){

		prueba_in = document.getElementById("russia_in_game")
	}else if(cambiar==22){
	
		prueba_in = document.getElementById("alemania_in_game")
	
	}else if(cambiar==23){
	
		prueba_in = document.getElementById("brasil_in_game")
	
	}else if(cambiar==24){
	
		prueba_in = document.getElementById("portugal_in_game")
	
	}else if(cambiar==25){
	
		prueba_in = document.getElementById("españa_in_game")
	
	}else if(cambiar==26){
	
		prueba_in = document.getElementById("argentina_in_game")
	
	}else if(cambiar==27){
	
		prueba_in = document.getElementById("inglaterra_in_game")
	
	}else if(cambiar==28){
	
		prueba_in = document.getElementById("francia_in_game")
	
	}else if(cambiar==17){
	
		prueba_in = document.getElementById("wefere_in_game")

		
	
	}else if(cambiar==1){
	
		prueba_in = document.getElementById("gear_in_game")
	
	}else if(cambiar==2){
	
		prueba_in = document.getElementById("corazon_in_game")
	
	}else if(cambiar==3){
	
		prueba_in = document.getElementById("spinner_in_game")
	
	}else if(cambiar==4){
	
		prueba_in = document.getElementById("music_in_game")
	
	}else if(cambiar==10){
	
		prueba_in = document.getElementById("prohibido_in_game")
	
	}else if(cambiar==12){
	
		prueba_in = document.getElementById("avion_in_game")
	
	}else if(cambiar==13){
	
		prueba_in = document.getElementById("illuminati_in_game")
	
	}else if(cambiar==14){
	
		prueba_in = document.getElementById("angry_in_game")
	
	}else if(cambiar==15){
	
		prueba_in = document.getElementById("aim_in_game")
	
	}
	else if(cambiar==16){
	
		prueba_in = document.getElementById("tierra_in_game")
	
	}
	else if(cambiar==29){
	
		prueba_in = document.getElementById("canada_in_game")
	
	}

	else if(cambiar==6){
	
		prueba_in = document.getElementById("cookie_in_game")
	
	}
	else if(cambiar==7){
	
		prueba_in = document.getElementById("ace_in_game")
	
	}
	else if(cambiar==8){
	
		prueba_in = document.getElementById("pencil_in_game")
	
	}
	else if(cambiar==9){
	
		prueba_in = document.getElementById("sword_in_game")
	
	}
	else if(cambiar==30){
	
		prueba_in = document.getElementById("novum_in_game")
	
	}


//-----------------------------------PELOTA------------------------------------------------

var angulo = 0;
function Ball(x,y,radio,velx,vely){

this.x = x;

this.y = y;

this.velx = velx;

this.vely = vely;

this.radio = radio;

this.draw =	function(){



	 c.save(); 

    // move to the middle of where we want to draw our image
    c.translate(this.x+10, this.y+10);

    // rotate around that point, converting our 
    // angle from degrees to radians 
    c.rotate(angulo * Math.PI/180);

    c.translate(-this.x-10, -this.y-10);	
		
	c.beginPath();

    c.fillStyle = "white";

   

    if(cambiar==17 || cambiar==18){
	

		color = "rgb("+r+", "+g+", "+b+")";
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
}
	
	c.shadowColor = color;

	c.shadowBlur = blur;

	console.log(cambiar);

    
	c.drawImage(prueba_in,this.x,this.y);

	c.restore();


	

	}

this.update = function(){


	angulo+=5;

	velocidad = true;




//--------------------------REBOTE--------------------------------
var audio_bounce = document.getElementById("audio_bounce");

var audio_lose = document.getElementById("audio_lose");

var audio_score = document.getElementById("audio_score");


	if(this.x<0){

		this.x=0;


		
		this.velx = -this.velx;

	}

	if(this.x+20 > canvas_width){

		this.x=canvas_width-20;

		
			
		
		this.velx = -this.velx;


	}

	if(this.y<0 ){

		

			

		
		this.vely = -this.vely;

	}

//--------------------------CONSEGUIR PUNTOS------------------------------

	if(this.y+18 > y_r && ball_over_r==0 ){
			/*AdMob.prepareInterstitial({
  	 			adId: admobid.interstitial,
    			autoShow: true
  			});*/

			
  			
			audio_lose.play();

			aparecer = false;

			velocidad = false;

			lentitud = false;

			puntos_doble = false;
			
			this.x=window.innerWidth/2;
			
			this.y=30;
			
			this.velx=-this.velx
			
			this.vely = 0;
			
			this.velx = 0;

           if(score>=1 && score<= 5){



           	if(localStorage.getItem("coins")){

           		coins = parseInt(localStorage.getItem("coins"))+3

           		coins_partida += 3;

				}else{
					coins+=3

					coins_partida += 3;
			}

           	

           	

           }else if(score==0){

           	if(localStorage.getItem("coins")){

           		coins = parseInt(localStorage.getItem("coins"))+0

           		coins_partida += 0;

				}else{
					coins+=0;

					coins_partida = 0
			}

           }else if(score>5){

           	if(localStorage.getItem("coins")){

           		coins = parseInt(localStorage.getItem("coins"))+Math.floor(score/2)

           		coins_partida += Math.floor(score/2);



				}else{
					coins+= Math.floor(score/2);

					coins_partida += Math.floor(score/2);
			}

           }

           localStorage.setItem("coins", coins)

            


           
			

			perder = true;

			close_m = 0;

			 menu_perder = 1;

			 //admob.interstitial.show()

			 if(localStorage.getItem("coins")){

				document.getElementById("coin").innerHTML = localStorage.getItem("coins");
			}else{
				document.getElementById("coin").innerHTML = 0;
			}
			 

	}

	
	if(this.x >= mouse.x-20 && this.x<= mouse.x+(r_width) && this.y+20 >= y_r){
		

			audio_score.play();

			



		this.vely=-this.vely;
		
		if(touch_resultado<-5){

		if(this.velx<0){
		
        	this.velx=-this.velx;

		}

	}else if(touch_resultado>5){

		if(this.velx>0){
		
        	this.velx=-this.velx;

		}

	}
		
		
		

		if(puntos_doble===true){
		
        	score+=2
		
        }else{
		
        	score +=1;

		}

        if(score>localStorage.getItem('high_score')){

                high_score=score;

                localStorage.setItem('high_score', high_score);
 
            }
		
		if(this.vely>0){
		
		this.vely +=.3;
	
		
		}else {

		this.vely -=.3;

	
			}

		if(this.velx>0){
		
		
		this.velx +=.3;
		
		}else {

		this.velx -=.3;
	
			}
		}

		




		if(this.x >= mouse.x && this.x<= mouse.x+(r_width)){

			
			
            ball_over_r =1;

		}else{
			
            ball_over_r=0;
		
        }

		//-------------------------------TRANSPORTAR PELOTA---------------------------------------------------

	if(draw && this.x<=portal_x&&this.y>portal_y&&this.y<portal_y+portal_altura && portal_posicion<.5 ){
			
            this.y=50;
			
            this.x= Math.random()*(canvas_width-35);

			doSetTimeout();

			if(this.orientacion>.5){

				this.velx=-this.velx;
			}

			if(this.vely>0){
		
			this.vely +=1;
		
			}
			
			if(this.velx>0){
		
		
			this.velx +=1;
		
			}else {

			this.velx -=1;
	
			}

	}



	if(draw && this.x>=portal_x&&this.y>portal_y&&this.y<portal_y+portal_altura && portal_posicion>.5 ){
			this.x= Math.random()*(canvas_width-this.radio);
			this.y=0;
			this.orientacion = Math.random();
			

			doSetTimeout();

			if(this.orientacion>.5){

				this.velx=-this.velx;
			}			

			if(this.vely>0){
		
			this.vely +=1;
			
			}
			
			if(this.velx>0){
		
		
			this.velx +=1;
		
			}else {

			this.velx -=1;
	
			}
		

	}

	//-------------------------------------------------------------AGARRAR POWER-UPS---------------------------------

	if(visible && this.x>(power_x)&&this.x<(power_x+100)&&this.y>(power_y)&&this.y<(power_y+100)){

		doSetTimeout_4();

		if(poder==0){

			aparecer = true;

			bola2();


		}
		if(poder==1){

			lentitud=true;

			lentitud_disminuir();

			
		}
		if(poder==2){

			puntos_doble = true;

		}
		if(poder==3){

			velocidad=true;

			velocidad_aumentar();

			poder=0;

			

			
		}

		if(poder==4){

			this.velx=-this.velx;

			if(this.vely<0){

				this.vely= -this.vely;
			}

			

			
		}
	}


	

	this.x+=this.velx;
	
	this.y+=this.vely;

	this.draw();
	
	}


}

function velocidad_aumentar(){

	


		if(velocidad){
			
            if(ball.velx>0){

            	ball.velx+=5;
			
            }
			
            if(ball.velx<0){

            	ball.velx-=5;
				
            }
			
            if(ball.vely>0){
			
            	ball.vely+=5;
			
            }
			
            if(ball.vely<0){
			
            	ball.vely-=5
          }

        }

}

function lentitud_disminuir(){

	


		if(lentitud){
			
            if(ball.velx>0 && ball.velx<=5){

            	ball.velx=3;
			
            }
			
            if(ball.velx<0 && ball.velx>=-5){

            	ball.velx=-3;
				
            }

            if(ball.velx>0 && ball.velx>5){

            	ball.velx=5;
			
            }
			
            if(ball.velx<0 && ball.velx<=-5){

            	ball.velx=-5
				
            }
			
             if(ball.vely>0 && ball.vely<=5){

            	ball.vely=3;
			
            }
			
            if(ball.vely<0 && ball.vely>=-5){

            	ball.vely=-3;
				
            }

            if(ball.vely>0 && ball.vely>5){

            	ball.vely=5;
			
            }
			
            if(ball.vely<0 && ball.vely<=-5){

            	ball.vely=-5
				
            }

        }

}

var bola2_x = 30;
 var bola2_y = 10;
var bola2_velx = 5;
var bola2_vely = 5;
var ball2_over_r

function bola2(){

	 c.save(); 

    // move to the middle of where we want to draw our image
    c.translate(bola2_x+10, bola2_y+10);

    // rotate around that point, converting our 
    // angle from degrees to radians 
    c.rotate(angulo * Math.PI/180);

    c.translate(-bola2_x-10, -bola2_y-10);	
		
	c.beginPath();

    c.fillStyle = "white";

  
	c.drawImage(prueba_in,bola2_x,bola2_y);

	c.restore();

	bola2_x+=bola2_velx;
	bola2_y+=bola2_vely;

	if(bola2_x+20>=canvas_width || bola2_x<0){
		bola2_velx=-bola2_velx
	}

	if(bola2_y<0){
		bola2_vely=-bola2_vely
	}

	if(bola2_x>mouse.x && bola2_x < mouse.x+r_width && bola2_y+17 >= y_r){

		var audio_score = document.getElementById("audio_score");

		audio_score.play();

		bola2_vely=-bola2_vely

		score +=1;

        if(score>localStorage.getItem('high_score')){

                high_score=score;

                localStorage.setItem('high_score', high_score);
 
            }
	}

	if(bola2_y+15>y_r && ball2_over_r ==0){

		audio_lose.play();

		aparecer = false;

			velocidad = false;

			lentitud = false;

			puntos_doble = false;
			
			ball.x=window.innerWidth/2;
			
			ball.y=30;
			
			ball.velx=-ball.velx
			
			ball.vely = 0;
			
			ball.velx = 0;

			bola2_y = 10;

			bola2_x = 30;

			bola2_vely =0;

			bola2_velx = 0;
			
			perder=true;

			menu_perder=1;
			

			close_m = 0;

			//admob.interstitial.show()

			

			 if(score>=1 && score<= 5){



           	if(localStorage.getItem("coins")){

           		coins = parseInt(localStorage.getItem("coins"))+3

           		coins_partida += 3;

				}else{
					coins+=3

					coins_partida += 3;
			}

        

           }else if(score==0){

           	if(localStorage.getItem("coins")){

           		coins = parseInt(localStorage.getItem("coins"))+0

           		coins_partida += 0;

				}else{
					coins+=0;

					coins_partida = 0
			}

           }else if(score>5){

           	if(localStorage.getItem("coins")){

           		coins = parseInt(localStorage.getItem("coins"))+Math.floor(score/2)

           		coins_partida += Math.floor(score/2);



				}else{
					coins+= Math.floor(score/2);

					coins_partida += Math.floor(score/2);
			}

           }

            localStorage.setItem("coins", coins)

       



			 if(localStorage.getItem("coins")){

				document.getElementById("coin").innerHTML = localStorage.getItem("coins");
			}else{
				document.getElementById("coin").innerHTML = 0;
			}



	}
	


}

//--------------------------------------CREAR PORTALES---------------------------------

setInterval(function(){doSetTimeout_2();},5000)

function doSetTimeout(){

            portal_altura=0;

			c.clearRect(portal_x,portal_y,portal_ancho,portal_altura);

			draw=false;
			
            close=false;
}

function doSetTimeout_2(){

	if(close==false){
	

		portal_posicion = Math.random();

		if(portal_posicion>.5){

			portal_x = canvas_width- 31;

		}else{

			portal_x=0;
		}

		portal_y=Math.random()*(window.innerHeight-(window.innerHeight/4+150));

		draw=true

	}

		if(close===true){

            cerrar_portales=1;


             if(cerrar_portales==1){

                portal_altura=0;

                c.clearRect(portal_x,portal_y,portal_ancho,portal_altura);

                draw=false;
                
                close=false;
            
             }
		}
}


//----------------------------CREAR POWERUPS---------------------------------

setInterval(function(){doSetTimeout_3()

 quitar();

  puntos();

},15000)



function doSetTimeout_3(){

		

			if(cerrar==false && aparecer===false){

				power_x = Math.random()*canvas_width;

				power_y = Math.random()*(canvas_height/2);

				power_radio = 25;

				visible = true;

				poder = Math.floor(Math.random()*4);

				power_posicion = Math.floor(Math.random()*1)

			}

			if(cerrar){

                c.clearRect(power_x-power_radio,power_y-power_radio,power_radio*2,power_radio*2);

                visible=false;
			
                cerrar=false;

		}
}

function doSetTimeout_4(){
	
    c.clearRect(power_x-power_radio,power_y-power_radio,power_radio*2,power_radio*2);
			
	visible=false;
	
    cerrar=false;

}

function quitar(){

	
		if(aparecer){
		
            aparecer=false;

            bola2_x = 30;
 			bola2_y = 10;

           
	}

		if(velocidad){

			velocidad=false
			
			
		}
            if(lentitud){
			
            lentitud=false;
			
		      }
	}

function puntos(){

	if(puntos_doble){

			puntos_doble=false;
		
        }		
}


//--------------------------------------ANIMAR---------------------------------

function animar(){



document.getElementById('local').innerHTML = localStorage.getItem('high_score')

    
	if(bola2_x >= mouse.x && bola2_x<= mouse.x+(r_width) || bola2_x+10 >= mouse.x && bola2_x+10<= mouse.x+(r_width) || bola2_x+20 >= mouse.x && bola2_x+20<= mouse.x+(r_width)){
			
            ball2_over_r =1;

		}else{
			
            ball2_over_r=0;
		
        }

        if(draw && bola2_x<=portal_x&&bola2_y>portal_y&&bola2_y<portal_y+portal_altura && portal_posicion<.5 ){
			
            bola2_x=155;
			
            bola2_y=50;
			
            bola2_x= Math.random()*(canvas_width-20);

			doSetTimeout();

			

			if(bola2_vely>0){
		
			bola2_vely +=1;
		
			}
			
			if(bola2_velx>0){
		
		
			bola2_velx +=1;
		
			}else {

			bola2_velx -=1;
	
			}

	}

	imagen.width = imagen_width;

	imagen.height = imagen_height;

    menu_pausa.width = menu_pausa_width;

    menu_pausa.height = menu_pausa_height;

			
	var animation_frame = requestAnimationFrame(animar);
	
	c.clearRect(0,0,innerWidth,innerHeight);



//-------------------------------DIBUJAR PORTALES---------------------------------

	if(draw){
     c.shadowBlur = 0;

        if(portal_altura<=window.innerHeight/4){

            portal_altura+=15

        }

        var portal = document.getElementById('portal');

        var portal_i = document.getElementById('portal_i');

        if(portal_posicion>.5){
      
           
      
            c.drawImage(portal_i, portal_x,portal_y,portal_ancho,portal_altura);
      
        }else{
      
            
      
            c.drawImage(portal, portal_x,portal_y,portal_ancho,portal_altura);
        }

        close = true;
	}

//---------------------------DIBUJAR POWER-UPS----------------------------------

	if(visible){
     c.shadowBlur = 0;
		
		if(power_x>=canvas_width-100){
		
        	power_x=canvas_width-100;
		
        }

		if(poder==0){
		
        	var balls = document.getElementById('balls');
        
            ball.width=0;

            if(balls.width<50){
        
                balls.width+=10
        
            }

			
		
        	c.drawImage(balls,power_x,power_y)
		}

		if(poder==1){
		
        	var lentitud_imagen = document.getElementById('lentitud');
		
        	
		
        	c.drawImage(lentitud_imagen,power_x,power_y)
		}

		if(poder==2){
		
        	var x2 = document.getElementById('x2');
		
        	
		
        	c.drawImage(x2,power_x,power_y)

			
		}

		if(poder==3){
		
        	var velocidad_imagen = document.getElementById('velocidad');
		
        	
		
        	c.drawImage(velocidad_imagen,power_x,power_y)
		
        }

        if(poder==4){
		
        	var reverse_imagen = document.getElementById('reverse');
		
        	
		
        	c.drawImage(reverse_imagen,power_x,power_y)
		
        }

		cerrar = true;
		
        c.closePath();
	
    }

	
//-----------------------------------DIBUJAR RAQUETA--------------------------

	c.beginPath();
  c.shadowBlur = 0;
	
	c.fillRect(x_r,y_r,r_width,10);



	c.fillStyle = "white";
	


  c.closePath();


//-----------------------------------------DIBUJAR SCORE-----------------------

	c.font="60px pixel_digivolveregular";
	
	c.fillText(score,x_text,50);

	c.closePath();

	if(aparecer){

		bola2();

		
	}

//-------------------------PONER/QUITAR PAUSA------------------------------

 c.beginPath();

    c.shadowBlur=0;

    boton_pausa.width=25;
  
    boton_pausa.height=25;

    boton_pausa.addEventListener('click',function(){
    	
        
        poner_menu=true;
        
        menu=true

        pausa = true;

        
    })


    if(poner_menu===true && menu_pausa_width<window.innerWidth/1.1){
    	var audio = document.getElementById("audio");

    	audio.volume = .2

        menu_pausa_width+=100;        

    }else if(poner_menu===false){
    	var audio = document.getElementById("audio");

    	audio.volume = 1;

        ball.update();
    }

    if(menu===true&&touch_x<canvas_width/2 && touch_y>canvas_height/1.3 ){
        

        if(menu_pausa_width>0){

            poner_menu=false            
           
            menu_pausa_width-=100;

        }

        if(menu_pausa_width<=0){
               
                touch_x=undefined;

                touch_y=undefined

                menu=false;
            }
    
        }

    if(menu===true && touch_x>canvas_width/2 && touch_y>canvas_height/1.3 ){

        poner_menu=false
            
        menu_pausa_width-=100;

       if(menu_pausa_width<=0){
        
            menu_pausa.height=0;
        
            menu=false
        
            borrar_todo=1;

            cancelAnimationFrame(animation_frame);

    }

}

    if(menu_pausa_width<=0 && borrar_todo==1){

        borrar();
    }

//--------------------------------------------MENU PERDER-----------------------------------------

	if(menu_perder==1){
       
		c.clearRect(0,0,canvas_width,canvas_height);

		if(imagen_height<window.innerHeight/1 && close_m==0){
			
			imagen_height+=100;
			
			if(imagen_height>=window.innerHeight/1){

				document.getElementById("score").setAttribute("style", "visibility:visible")

				document.getElementById("score").innerHTML = score;

				document.getElementById("pausa").setAttribute("style", "visibility: hidden")

		

				document.getElementById("coins_gotten").innerHTML = " +" + coins_partida;
				

				

				document.getElementById("coins_gotten").setAttribute("style", "visibility:visible")

				document.getElementById("coins_img_gotten").setAttribute("style", "visibility:visible")
				
                close_m=2;	

			}
		}


        if(touch_x<imagen_width/2 && touch_y>canvas_height/1.3 && imagen_height>0){
            
            imagen_height-=100;
            
            if(imagen_height<=0){
                close_m=0;
                
                cancelAnimationFrame(animation_frame);

                startGame();

                coins_partida=0;

                document.getElementById('pausa').setAttribute("style", 'visibility:visible')

                document.getElementById("coins_gotten").setAttribute("style", "visibility: hidden")

				document.getElementById("coins_img_gotten").setAttribute("style", "visibility: hidden")
            
                menu_perder=0;
                
                close_m=0;


            }
            
        }

		

		if(touch_x>imagen_width/2&&close_m==2 && touch_y>canvas_height/1.3){

			
				imagen_height-=100;
				
				
				if(imagen_height<=0){

         

                    imagen.height=0;

                    boton_pausa.width=0;

                    boton_pausa.height=0;

                    document.getElementById("score").setAttribute("style", "visibility: hidden")

                    cancelAnimationFrame(animation_frame);

                    borrar_todo=1;

				}

            if(borrar_todo==1){

                borrar();

            }	
			
		}

	}

}

animar();


function borrar(){

	coins_partida=0;
	 document.getElementById("juego").setAttribute("style", "visibility: hidden")

	 document.getElementById("score").setAttribute("style", "visibility: hidden")
	
	document.getElementById("coins_gotten").setAttribute("style", "visibility: hidden")

	document.getElementById("coins_img_gotten").setAttribute("style", "visibility: hidden")

	document.getElementById("coin_img").setAttribute("style", "visibility:visible");

	document.getElementById("coin").setAttribute("style", "visibility:visible");
	
	c.beginPath();
	
    c.clearRect(0,0,canvas_width,canvas_height);
	
    ball.x=0;
    
    ball.y=0;
    
    ball.velx=0;
    
    ball.vely=0;

    boton_pausa.width=0;

    boton_pausa.height=0;
    
	juego_activo = false;
    
    document.getElementById("menu").setAttribute("style","visible")
    
    }
}