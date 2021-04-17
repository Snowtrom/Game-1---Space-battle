function drawStart(){
    if(menu == "start"){
        drawImage(backStars, 0, 0, 800, 600);
        drawImage(playerShip1_blue_2 , startX, 165, 200, 200);

        context.beginPath();
        context.fillStyle = "violet";
        context.font="italic small-caps bold 50px Lucida Handwriting";
        context.fillText("Space Battle" , 250, 70);


        //shop
        context.fillStyle = "purple";
        context.fillRect(50, 530, 200 ,50);
        
        context.fillStyle = "white";
        context.font="italic small-caps bold 36px arial";
        context.fillText("Hangar" , 75, 565);

        
        //play
        context.fillStyle = "purple";
        context.fillRect(300, 530, 200 ,50);        

        context.fillStyle = "white";
        context.font="italic small-caps bold 36px arial";
        context.fillText("Play" , 360, 565);


        //rules
        context.fillStyle = "purple";
        context.fillRect(550, 530, 200 ,50); 

        context.fillStyle = "white";
        context.font="italic small-caps bold 36px arial";
        context.fillText("Rules" , 600, 565);
    } 
}