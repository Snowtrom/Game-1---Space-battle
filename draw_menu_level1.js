let sx1 = 0, sy1 = 0;
let sx2 = 0 , sy2 = -600;

function drawLevel1(){



    drawImage(backStars, sx1, sy1, 800, 600);
    drawImage(backStars2, sx2, sy2, 800, 600);

    if(timer >= 50 && timer <= 100){
        context.fillStyle = "white";
        context.font="italic small-caps bold 100px arial";
        context.fillText("3" , 370, 300);
    }


    if(timer >= 100 && timer <= 150){
        context.fillStyle = "white";
        context.font="italic small-caps bold 100px arial";
        context.fillText("2" , 370, 300);
    }


    if(timer >= 150 && timer <= 200){
        context.fillStyle = "white";
        context.font="italic small-caps bold 100px arial";
        context.fillText("1" , 370, 300);
    }







    
    if(b == 0){
   
        playerShip(pShip , 350, 480, 100, 100);
        
        context.fillStyle = "red";
        context.fillRect(350 , 590,  100, 20);
   
    }else if(b == 1){
   
        playerShip(pShip , mouseX - 50, mouseY - 50, 100, 100);

        
        if(takenDmg > totalhp)takenDmg = totalhp;
        
        context.fillStyle = "red";
        context.fillRect(mouseX - 50, mouseY + 60, ((totalhp - takenDmg) / totalhp) * 100, 20);
        
        context.fillStyle = "white";
        context.font="italic small-caps bold 15px arial";

        if(totalhp - takenDmg < 100){
            context.fillText(`${totalhp - takenDmg}`, mouseX - 10, mouseY + 74)
        }
        
        if(totalhp - takenDmg < 1000 && totalhp - takenDmg >= 100){
            context.fillText(`${totalhp - takenDmg}`, mouseX - 12, mouseY + 74)
        }
    
        if(totalhp - takenDmg < 10000 && totalhp - takenDmg >= 1000){
            context.fillText(`${totalhp - takenDmg}`, mouseX - 15, mouseY + 74)
        }

    }else{
        //Pause menu
        context.fillStyle = "purple";
        context.fillRect(250, 250, 300, 100);

        context.beginPath();
        
        context.fillStyle = "gray";
        context.strokeStyle = "black";

        //restart button
        context.arc(310, 300, 30, 0, 2*Math.PI);   
        context.stroke();
        context.fill();

        //Play button
        context.arc(400, 300, 30, 0, 2*Math.PI);   
        context.stroke();
        context.fill();

        //Back button
        context.arc(490, 300, 30, 0, 2*Math.PI);   
        context.stroke();
        context.fill();
    }




    
    context.beginPath();
    context.strokeStyle = "black";
    context.fillStyle = "gray";

    context.arc(780, 20, 10, 0, 2*Math.PI);
    context.fill();



    context.fillStyle = "black";

    context.fillRect(775, 15, 4, 10);
    context.fillRect(781, 15, 4, 10);


}