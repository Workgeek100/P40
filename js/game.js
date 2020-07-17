
class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    });

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    //car1 is the label it can be also written as "car" to relate the image as done in the trex game;
    runner1 = createSprite(100,200);
    runner1.addAnimation("r1",runner1_img)
    //runner1.addImage("runner1", staticRunner);

    runner2 = createSprite(100,250);
    runner2.addAnimation("r2",runner2_img);
    //runner2.addImage("runner2", staticRunner)
    
    runner3 = createSprite(100,300);
    runner3.addAnimation("r3",runner3_img);
    //runner3.addImage("runner3",staticRunner);
  
    runner4 = createSprite(100,350);
    runner4.addAnimation("r4",runner4_img);
    //runner4.addImage("runner4",staticRunner);
    
    runners = [runner1,runner2,runner3,runner4];

    console.log(runner1);
    console.log(runner2);
    console.log(runner3);
    console.log(runner4);    
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    player.getRunners();
    
    if(allPlayers !== undefined){
      
      background(rgb(198,135,103));
      
      image(track,displayWidth/10-500,displayHeight/6-50,3860,600);
      //runner1.addImage("runner1", staticRunner);
      //runner2.addImage("runner2", staticRunner);
      //runner3.addImage("runner3", staticRunner);
      //runner4.addImage("runner4", staticRunner);
      
      var index = 0;
      var x 
      var y  = 200
      

      for(var plr in allPlayers){
        
        index = index + 1 ;

        
        y = y + 200;

        
        x=   allPlayers[plr].distance 

        

        if (index === player.index){
          stroke(10);
          fill("yellow")
         //rect(x-50,y+33,75,75);
          runners[index-1].position.x = x;
          runners[index-1].position.y = y;
          runners[index - 1].shapeColor = "red";
          camera.position.y = displayHeight/2;
          camera.position.x = runners[index-1].position.x;

      
        }
       
        
      }
    
    

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      //runner1.changeAnimation("r1",runner1_img);
      //runner2.changeAnimation("r2",runner2_img);
      //runner3.changeAnimation("r3",runner3_img);
      //runner4.changeAnimation("r4",runner4_img);
      player.distance +=10
      player.update();
    }
    }
    
spawnObstacles()
  
  if(player.distance > 3300){
  
gameState = 2
player.rank = player.rank+1;
Player.updateRunnersAtEnd(player.rank);

  }

  runner1.y=mouseY;
  runner2.y=mouseY;
  runner3.y=mouseY;
  runner4.y=mouseY;
    drawSprites();
  }
  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }
}


function spawnObstacles(){
if(World.frameCount%100===0){
  obs1 = createSprite(3000,450,20,20);
  obs1.addImage("hurdle",obs_image);
  obs1.velocityX = -6;
  obs1.scale = 0.5;
}
}
