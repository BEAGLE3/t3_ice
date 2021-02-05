var START=0;
var PLAY=1;
var END=2;
var gameState=START;
var bg,button,button_img;
var background;
var abc;


function preload(){
    bg=loadImage("snow.png")
    button_img=loadImage("play.png")
}

function setup(){
createCanvas(600,600)
 background=createSprite(600,600,0,0)
  background.addImage(bg)
  
button =createSprite(280,250,30,30)
button.addImage(button_img)

//abc=createSprite(100,100,20,20);

}

function draw(){

if(gameState===START){
   background.visible=true
   button.visible=true;
   //abc.visible=false;
    //background(bg)
    textSize(50)
    text("Ice Skating Game",110,100)
  
    
 if(mousePressedOver(button)&&gameState===START){
   gameState=PLAY;
}
    
}
 if(gameState===PLAY){
    remove()
   
   //abc.visible=true;
   // button.visible=false;
 //background("pink")
spawnice()
}


 drawSprites()
}
function spawnice(){

 abc=createSprite(100,100,20,20)


}
