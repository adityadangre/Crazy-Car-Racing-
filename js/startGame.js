class startGame {
    constructor(){
    }

    gameStart(){
        camera.y=canvas.height/2;
        textSize(60);
        fill(202, 146, 16);
        stroke(216, 43, 4);
        strokeWeight(10);
        text("Crazy Car Racing Game", (displayWidth-1185)/2-50, (displayHeight-650)/2);
        //game state = 0 i.e. start of game
        if(gameState===0){
            start.visible=true;
            startpoint.visible=false;
            if(mousePressedOver(start)){
                start.visible=false;
                buttonclick.play();
                gameState=6;
            }    
            if(mouseIsOver(start)){
                start.addImage(startover_img);
            }
            else
            start.addImage(start_img);       
        }
        //game State= 4 i.e. either boamb spot happen or fuel empty
        if(gameState===4){
            textSize(40);
            fill("white");
            stroke(216, 43, 4);
            text("Distance Travelled :- " + Math.round(distance/100)+ "KM", (displayWidth-1185)/2-100 + 200, (displayHeight-650)/2 + 80);
            text("Coins Collected :- " + coinCount, (displayWidth-1185)/2-100 + 200, (displayHeight-650)/2 + 160);
            btrestart.visible=true;
            if(oxygen>0){
            btcontinue.visible=true;            
            btoption.visible=true;
            }

            //click on continue button
            if(mousePressedOver(btcontinue)){
                btcontinue.visible=false;
                btrestart.visible=false;
                btoption.visible=false;
                buttonclick.play();
                distance=distance;
                track.velocityY=0;  
                fuel=fuel;
                //coin=coin;
                gameState=3;   
            }        
            if(mouseIsOver(btcontinue))
                btcontinue.addImage(btcontinue2_img);            
            else
            btcontinue.addImage(btcontinue1_img);

            //click on re-start button
            if(mousePressedOver(btrestart)){
                btcontinue.visible=false;
                btrestart.visible=false;
                btoption.visible=false;
                buttonclick.play();
                gameState=6;
                distance=0;
                oxygen=3;
                coinCount=0;
                fuel=20;    
                stcount=0; 
                track.velocityY=0;         
            }        
            if(mouseIsOver(btrestart))
                btrestart.addImage(btrestart2_img);            
            else
            btrestart.addImage(btrestart1_img);

            //clcik on options button
            if(mousePressedOver(btoption)){
                btcontinue.visible=false;
                btrestart.visible=false;
                btoption.visible=false;
                buttonclick.play();
                gameState=1;
                distance=distance;
                oxygen=oxygen;
                track.velocityY=0;  
                fuel=10;                  
            }
        
            if(mouseIsOver(btoption)){
                btoption.addImage(btoption2_img);
            }
            else
            btoption.addImage(btoption1_img);
        }       
        
    }
}