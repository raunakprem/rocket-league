var canvas, backgroundImage;
var gameState = "serve";
 
var form, player, game;

var raptor_img , Xmax_img, AMG_img,urus_img,mega_img,defender_img , bronco_img;

var V8_img

var obstacle_img;

function preload(){
 // Xmax_img = loadImage("Xmaxx.jpg");
 // raptor_img = loadImage("raptor.jpg");
 // urus_img= loadImage("urus.jpg");
 // AMG_img = loadImage("AMG.jpg");
 // mega_img = loadImage("mega.jpg");
 // defender_img = loadImage("defender.jpg");
  bronco_img = loadImage("bronco.jpg");
 // V8_img = loadImage("V8.jpg");
//obstacle_img = loadImage("patriot-3.jpg")
}

function setup() {
  createCanvas(1600,400);

raptor= createSprite(800,300);
Xmax = createSprite(800,300);
AMG = createSprite(800,300);
 urus = createSprite(800,300);
mega = createSprite(800,300);
defender = createSprite(800,300);
bronco = createSprite(800,300);
V8= createSprite(800,300);
obstacle = createSprite(200,200);

bronco.scale=2;
bronco.x = bronco.width/2;




raptor.addImage(raptor_img);
Xmax.addImage(Xmax_img);
AMG.addImage(AMG_img);
urus.addImage(urus_img);
mega.addImage(mega_img);
defender.addImage(defender_img);
bronco.addImage(bronco_img);
V8.addImage(V8_img);
obatacle.addImage(obstacle_img);

raptor.visible = false;
Xmax.visible = false;
AMG.visible = false;
urus.visible = false;
mega.visible = false;
defender.visible = false;
V8.visible = false;
obstacle.visible = false;
}


function draw() {
  background(bronco); 
  
  if(bronco.x<0){
    bronco.x= bronco.width/2
  }

if (keyDown ("space")){
  gameState = "play";
  raptor.visible = true;
  Xmax.visible = true;
  AMG.visible = true;
  urus.visible = true;
  mega.visible = true;
  defender.visible = true;
  V8.visible = true;
  raptor.scale= 0.2;
  Xmax.scale= 0.2;
  AMG.scale= 0.2;
  urus.scale= 0.2;
  maga.scale= 0.2;
  defender.scale= 0.2;
  V8.scale= 0.2;
}
  if(mousePressedover("raptor")){
    raptor.visible = true;
    raptor.scale= 0.5;
Xmax.visible = false;
AMG.visible = false;
urus.visible = false;
mega.visible = false;
defender.visible = false;
V8.visible = false;
obstacle.visible =  true;
obstacle.visible =  true;
    obstacle.scale= 0.7;
  }
  if(mousePressedover("Xmax")){
    raptor.visible = false;
    Xmax.visible = true;
    Xmax.scale= 0.5;
    AMG.visible = false;
    urus.visible = false;
    mega.visible = false;
    defender.visible = false;
    V8.visible = false;
    obstacle.visible =  true;
    obstacle.scale= 0.7;

    if ( gameState === "serve" ) {
    
     
     }
     
     
      // make the ball move
     if(keyDown(UP_ARROW) ) {
  Xmax.y= Xmax.y+2
     
     }
    
     
     if (keyDown("DOWN_ARROW")){
      Xmax.y= Xmax.y-2
     }
      
      }
      if (keytDown("LEFT_ARROW")){
      
       Xmax.x = Xmax.x-2;
      
       }
    
     if  (keyDown("RIGHT_ARROW")){
    
      Xmaxx.x = 6;
      
     }
    
  }
  if(mousePressedover("AMG")){
    raptor.visible = false;
Xmax.visible = false;
AMG.visible = true;
AMG.scale= 0.5;
urus.visible = false;
mega.visible = false;
defender.visible = false;
V8.visible = false;
obstacle.visible =  true;
obstacle.scale= 0.7;
  }
  if(mousePressedover("urus")){
    raptor.visible = false;
Xmax.visible = false;
AMG.visible = false;
urus.visible = true;
urus.scale= 0.5;
mega.visible = false;
defender.visible = false;
V8.visible = false;
obstacle.visible =  true;
obstacle.scale= 0.7;
  }
  if(mousePressedover("mega")){
    raptor.visible = false;
    Xmax.visible = false;
    AMG.visible = false;
    urus.visible = false;
    mega.visible = true;
    mega.scale= 0.5;
    defender.visible = false;
    V8.visible = false;
    obstacle.visible =  true;
    obstacle.scale= 0.7;
  }

  if(mousePressedover("defender")){

    raptor.visible = false;
Xmax.visible = false;
AMG.visible = false;
urus.visible = false;
mega.visible = false;
defender.visible = false;
defender.scale= 0.5;
V8.visible = false;
obstacle.visible =  true;
obstacle.scale= 0.7;
}
if(mousePressedover("V8")){

  raptor.visible = false;
Xmax.visible = false;
AMG.visible = false;
urus.visible = false;
mega.visible = false;
defender.visible = false;
V8.visible = true;
V8.scale= 0.5;
obstacle.visible = true;
obstacle.scale= 0.7;
}
  drawSprites();

if(gameState ==="serve"){
  text ("press space to start the game",800,200)
}

}

