var canvas,backgroungImage ;
var gamestate=0;
var playerCount;
var database;
var form;
var player;
var game;
 
function setup(){
  canvas=createSprite (400,400);
  database= firebase.database();
  game=new Game();
  game.getState();
  game.start();
  }
function draw(){
  if(playerCount==4){
    game.update(1);
  }
  if (gamestate==1){
    clear();
    game.play();
  }
  }
