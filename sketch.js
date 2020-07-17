var canvas, backgroundImage;
var gameState = 0;
var playerCount,RunnerAtEnd;
var allPlayers;
var distance = 0;
var database;
var form,player,game;
var runners, runner1, runner2, runner3, runner4, staticRunner;
var runner1_img,runner2_img,runner3_img,runner4_img,track,track_img;

function preload(){
runner1_img = loadAnimation("images/runner2.png","images/runner3.png","images/runner4.png");
runner2_img = loadAnimation("images/runner2.png","images/runner3.png","images/runner4.png");
runner3_img = loadAnimation("images/runner2.png","images/runner3.png","images/runner4.png");
runner4_img = loadAnimation("images/runner2.png","images/runner3.png","images/runner4.png");
staticRunner = loadImage("images/runner1.png");
track = loadImage("images/track.jpg");
obs_image = loadImage("images/hurdle.png");
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight-200);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  }


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }

  if(keyCode === 32){
    console.log("xy")
    runner1.position.x = camera.position.x -100
  }
}
