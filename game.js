

var s;

var juego_activo;

var perder;

var pausa;



function ocultar(){


	
	

	juego_activo = false;


    close_m=0;
    menu_perder=0;

    

	
	startGame();
}

var high_score = 0;


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
var x =Math.random()*canvas_width;
var y = 10;
var ball_over_r=0;
var velx = 5;
var vely = 5;
var radio=10;
var ball = new Ball(x,y,radio,velx,vely);
var ball_2 = new Ball(10,y,radio,velx,vely);

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

//-----------------------------------RESIZE-------------------------------------------

window.addEventListener('resize', function(event){

	canvas.width= window.innerWidth;

	canvas.height = window.innerHeight;

})


//-----------------------------------PELOTA------------------------------------------------


function Ball(x,y,radio,velx,vely){

this.x = x;

this.y = y;

this.velx = velx;

this.vely = vely;

this.radio = radio;

this.draw =	function(){
		
		c.beginPath();

    c.fillStyle = "white";

    c.shadowColor = "red";

    c.shadowBlur = 50;

		
		c.arc(this.x,this.y,this.radio,0,Math.PI*2,false);

		
		c.fill();
		
        c.closePath();

	}

this.update = function(){

	if(velocidad){
			
            if(this.velx>0){
			
            	this.velx=15;	
			
            }
			
            if(this.velx<0){
			
            	this.velx=-15;	
			
            }
			
            if(this.vely>0){
			
            	this.vely=15;	
			
            }
			
            if(this.vely<0){
			
            	this.vely=-15;	
			
            }}

			if(lentitud){

			if(this.velx>0){

				this.velx=5;	

			}

			if(this.velx<0){

				this.velx=-5;	

			}

			if(this.vely>0){

				this.vely=5;	

			}

			if(this.vely<0){

				this.vely=-5;	

			}}



//--------------------------REBOTE--------------------------------

	if(this.x<0 || this.x > innerWidth){
		
		this.velx = -this.velx;

	}

	if(this.y<0 ){
		
		this.vely = -this.vely;

	}

//--------------------------CONSEGUIR PUNTOS------------------------------

	if(this.y > y_r+5 && ball_over_r==0 || ball_2.y > y_r+5 && ball_over_r==0){
			
			/*AdMob.prepareInterstitial({
  	 			adId: admobid.interstitial,
    			autoShow: true
  			});*/

			aparecer = false;

			velocidad = false;

			lentitud = false;

			puntos_doble = false;
			
			this.x=window.innerWidth/2;
			
			this.y=30;
			
			this.velx=-this.velx
			
			this.vely = 0;
			
			this.velx = 0;

            ball_2.x = window.innerHeight/2

            ball_2.y=30;
            
            ball_2.velx=-ball_2.velx
            
            ball_2.vely = 0;
            
            ball_2.velx = 0;

			

			perder = true;

			close_m = 0;

			 menu_perder = 1;
			 

	}

	if(this.x >= mouse.x && this.x<= mouse.x+(r_width) && this.y >= y_r){

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
			
            this.x=155;
			
            this.y=50;
			
            this.x= Math.random()*(canvas_width-this.radio);

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


		}
		if(poder==1){

			lentitud=true;

			
		}
		if(poder==2){

			puntos_doble = true;

		}
		if(poder==3){

			velocidad=true;

			
		}
	}
	

	this.x+=this.velx;
	
	this.y+=this.vely;

	this.draw();
	
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


             if(cerrar_portales==2){

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

            ball_2.x = window.innerHeight/2

            ball_2.y=30;
            
            ball_2.velx=-ball_2.velx
            
            ball_2.vely = 5;
            
            ball_2.velx = 5;
	}

		if(velocidad){

			velocidad=false
			
			if(ball.velx>0){

				ball.velx=5;	
			
            }
			
            if(ball.velx<0){
			
            	ball.velx=-5;	
			
            }
			
            if(ball.vely>0){
			
            	ball.vely=5;	
			}
			
            if(ball.vely<0){
			
            	ball.vely=-5;	
			
            }
			
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

    


	imagen.width = imagen_width;

	imagen.height = imagen_height;

    menu_pausa.width = menu_pausa_width;

    menu_pausa.height = menu_pausa_height;

     document.getElementById("title").innerHTML = "";

	document.getElementById("h1").innerHTML = "";

    document.getElementById("version").innerHTML = "";

	document.getElementById("credits").innerHTML = "";

    document.getElementById("high").innerHTML = "HIGH SCORE";
			
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

		ball_2.update();
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

        menu_pausa_width+=100;        

    }else if(poner_menu===false){

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

				document.getElementById("score").innerHTML = score;
				
                close_m=2;	

			}
		}


        if(touch_x<imagen_width/2 && touch_y>canvas_height/1.3 && imagen_height>0){
            
            imagen_height-=100;
            
            if(imagen_height<=0){
                close_m=0;
                
                cancelAnimationFrame(animation_frame);

                startGame();
            
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

                    document.getElementById("score").innerHTML = "";

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
	
	c.beginPath();
	
    c.clearRect(0,0,canvas_width,canvas_height);
	
    ball.x=0;
    
    ball.y=0;
    
    ball.velx=0;
    
    ball.vely=0;
    
    ball_2.x=0;
    
    ball_2.y=0;
    
    ball_2.velx=0;
    
    ball_2.vely=0;

    boton_pausa.width=0;

    boton_pausa.height=0;
    
	juego_activo = false;
    
    document.getElementById("h1").innerHTML = "PLAY";

    document.getElementById("credits").innerHTML = "credits";

    document.getElementById("title").innerHTML = "REBOUND";

    document.getElementById("version").innerHTML = "V 1.2";

    document.getElementById("high").innerHTML = "";

    document.getElementById("local").innerHTML = ""; 
    
    }
}