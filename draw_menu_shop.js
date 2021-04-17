function drawShop(){
    if(menu == "shop"){
        drawImage(backStars, 0, 0, 800, 600);
        
        context.fillStyle = "white";
        context.font="italic small-caps 20px arial";
        context.fillText("Max health" , 160, 40);
        
        //Health
        drawImage(heartSmall, 10, 10, 60, 60);
        context.beginPath();
        
        context.strokeStyle = "black";

        
        if(hpLvl >= 1){context.fillStyle = "pink";}else{context.fillStyle = "gray";}
        context.fillRect(90, 50, 25, 20);
        context.strokeRect(90, 50, 25, 20);
        

        if(hpLvl >= 2){context.fillStyle = "pink";}else{context.fillStyle = "gray";}
        context.fillRect(115, 50, 25, 20);
        context.strokeRect(115, 50, 25, 20);

        if(hpLvl >= 3){context.fillStyle = "pink";}else{context.fillStyle = "gray";}
        context.fillRect(140, 50, 25, 20);
        context.strokeRect(140, 50, 25, 20);

        if(hpLvl >= 4){context.fillStyle = "pink";}else{context.fillStyle = "gray";}
        context.fillRect(165, 50, 25, 20);
        context.strokeRect(165, 50, 25, 20);

        if(hpLvl >= 5){context.fillStyle = "pink";}else{context.fillStyle = "gray";}
        context.fillRect(190, 50, 25, 20);
        context.strokeRect(190, 50, 25, 20);

        if(hpLvl >= 6){context.fillStyle = "pink";}else{context.fillStyle = "gray";}
        context.fillRect(215, 50, 25, 20);
        context.strokeRect(215, 50, 25, 20);

        if(hpLvl >= 7){context.fillStyle = "pink";}else{context.fillStyle = "gray";}
        context.fillRect(240, 50, 25, 20);
        context.strokeRect(240, 50, 25, 20);

        if(hpLvl >= 8){context.fillStyle = "pink";}else{context.fillStyle = "gray";}
        context.fillRect(265, 50, 25, 20);
        context.strokeRect(265, 50, 25, 20);

        if(hpLvl >= 9){context.fillStyle = "pink";}else{context.fillStyle = "gray";}
        context.fillRect(290, 50, 25, 20);
        context.strokeRect(290, 50, 25, 20);

        if(hpLvl >= 10){context.fillStyle = "pink";}else{context.fillStyle = "gray";}
        context.fillRect(315, 50, 25, 20);
        context.strokeRect(315, 50, 25, 20);

        context.fillStyle = "green";
        context.strokeStyle = "black";
        context.fillRect(355, 15, 140, 50);
        context.strokeRect(355, 15, 140, 50);

        if(hpLvl < 10){
            if(powerupCost[hpLvl] < 1000){
                context.fillStyle = "white";
                context.font="italic small-caps bold 36px arial";
                context.fillText(powerupCost[hpLvl] , 393, 53);
            }

            if(powerupCost[hpLvl] >= 1000 && powerupCost[hpLvl] < 10000){
                context.fillStyle = "white";
                context.font="italic small-caps bold 36px arial";
                context.fillText(powerupCost[hpLvl] , 383, 53);
            }
        }else{
            context.fillStyle = "white";
            context.font="italic small-caps bold 36px arial";
            context.fillText("MAX" , 380, 53);   
        }



        
        //Body damage
        drawImage(flyMan, 15, 114, 50, 50);
        context.beginPath();
        
        context.fillStyle = "white";
        context.font="italic small-caps 20px arial";
        context.fillText("Body damage" , 150, 140);

        context.strokeStyle = "black";


        if(bdLvl >= 1){context.fillStyle = "red";}else{context.fillStyle = "gray";}
        context.fillRect(90, 154, 25, 20);
        context.strokeRect(90, 154, 25, 20);


        if(bdLvl >= 2){context.fillStyle = "red";}else{context.fillStyle = "gray";}
        context.fillRect(115, 154, 25, 20);
        context.strokeRect(115, 154, 25, 20);

        if(bdLvl >= 3){context.fillStyle = "red";}else{context.fillStyle = "gray";}
        context.fillRect(140, 154, 25, 20);
        context.strokeRect(140, 154, 25, 20);

        if(bdLvl >= 4){context.fillStyle = "red";}else{context.fillStyle = "gray";}
        context.fillRect(165, 154, 25, 20);
        context.strokeRect(165, 154, 25, 20);

        if(bdLvl >= 5){context.fillStyle = "red";}else{context.fillStyle = "gray";}
        context.fillRect(190, 154, 25, 20);
        context.strokeRect(190, 154, 25, 20);

        if(bdLvl >= 6){context.fillStyle = "red";}else{context.fillStyle = "gray";}
        context.fillRect(215, 154, 25, 20);
        context.strokeRect(215, 154, 25, 20);

        if(bdLvl >= 7){context.fillStyle = "red";}else{context.fillStyle = "gray";}
        context.fillRect(240, 154, 25, 20);
        context.strokeRect(240, 154, 25, 20);

        if(bdLvl >= 8){context.fillStyle = "red";}else{context.fillStyle = "gray";}
        context.fillRect(265, 154, 25, 20);
        context.strokeRect(265, 154, 25, 20);

        if(bdLvl >= 9){context.fillStyle = "red";}else{context.fillStyle = "gray";}
        context.fillRect(290, 154, 25, 20);
        context.strokeRect(290, 154, 25, 20);

        if(bdLvl >= 10){context.fillStyle = "red";}else{context.fillStyle = "gray";}
        context.fillRect(315, 154, 25, 20);
        context.strokeRect(315, 154, 25, 20);

        context.fillStyle = "green";
        context.strokeStyle = "black";
        context.fillRect(355, 119, 140, 50);
        context.strokeRect(355, 119, 140, 50);

        if(bdLvl < 10){
            if(powerupCost[bdLvl] < 1000){
                context.fillStyle = "white";
                context.font="italic small-caps bold 36px arial";
                context.fillText(powerupCost[bdLvl] , 393, 157);
            }

            if(powerupCost[bdLvl] >= 1000 && powerupCost[bdLvl] < 10000){
                context.fillStyle = "white";
                context.font="italic small-caps bold 36px arial";
                context.fillText(powerupCost[bdLvl] , 383, 157);
            }
        }else{
            context.fillStyle = "white";
            context.font="italic small-caps bold 36px arial";
            context.fillText("MAX" , 380, 157);   
        }


        //Attack damage
        drawImage(explosion, 10, 214, 60, 60);
        context.beginPath();

        context.fillStyle = "white";
        context.font="italic small-caps 20px arial";
        context.fillText("Attack damage" , 140, 245);

        context.strokeStyle = "black";


        if(attLvl >= 1){context.fillStyle = "orange";}else{context.fillStyle = "gray";}
        context.fillRect(90, 258, 25, 20);
        context.strokeRect(90, 258, 25, 20);


        if(attLvl >= 2){context.fillStyle = "orange";}else{context.fillStyle = "gray";}
        context.fillRect(115, 258, 25, 20);
        context.strokeRect(115, 258, 25, 20);

        if(attLvl >= 3){context.fillStyle = "orange";}else{context.fillStyle = "gray";}
        context.fillRect(140, 258, 25, 20);
        context.strokeRect(140, 258, 25, 20);

        if(attLvl >= 4){context.fillStyle = "orange";}else{context.fillStyle = "gray";}
        context.fillRect(165, 258, 25, 20);
        context.strokeRect(165, 258, 25, 20);

        if(attLvl >= 5){context.fillStyle = "orange";}else{context.fillStyle = "gray";}
        context.fillRect(190, 258, 25, 20);
        context.strokeRect(190, 258, 25, 20);

        if(attLvl >= 6){context.fillStyle = "orange";}else{context.fillStyle = "gray";}
        context.fillRect(215, 258, 25, 20);
        context.strokeRect(215, 258, 25, 20);

        if(attLvl >= 7){context.fillStyle = "orange";}else{context.fillStyle = "gray";}
        context.fillRect(240, 258, 25, 20);
        context.strokeRect(240, 258, 25, 20);

        if(attLvl >= 8){context.fillStyle = "orange";}else{context.fillStyle = "gray";}
        context.fillRect(265, 258, 25, 20);
        context.strokeRect(265, 258, 25, 20);

        if(attLvl >= 9){context.fillStyle = "orange";}else{context.fillStyle = "gray";}
        context.fillRect(290, 258, 25, 20);
        context.strokeRect(290, 258, 25, 20);

        if(attLvl >= 10){context.fillStyle = "orange";}else{context.fillStyle = "gray";}
        context.fillRect(315, 258, 25, 20);
        context.strokeRect(315, 258, 25, 20);

        context.fillStyle = "green";
        context.strokeStyle = "black";
        context.fillRect(355, 219, 140, 50);
        context.strokeRect(355, 219, 140, 50);

        if(attLvl < 10){
            if(powerupCost[attLvl] < 1000){
                context.fillStyle = "white";
                context.font="italic small-caps bold 36px arial";
                context.fillText(powerupCost[attLvl] , 393, 256);
            }

            if(powerupCost[attLvl] >= 1000 && powerupCost[attLvl] < 10000){
                context.fillStyle = "white";
                context.font="italic small-caps bold 36px arial";
                context.fillText(powerupCost[attLvl] , 383, 256);
            }
        }else{
            context.fillStyle = "white";
            context.font="italic small-caps bold 36px arial";
            context.fillText("MAX" , 380, 256);   
        }


        //Reload
        drawImage(bullet, 10, 318, 60, 60);
        context.beginPath();

        context.fillStyle = "white";
        context.font="italic small-caps 20px arial";
        context.fillText("Reload" , 175, 345);

        context.strokeStyle = "black";


        if(rldLvl >= 1){context.fillStyle = "green";}else{context.fillStyle = "gray";}
        context.fillRect(90, 358, 25, 20);
        context.strokeRect(90, 358, 25, 20);


        if(rldLvl >= 2){context.fillStyle = "green";}else{context.fillStyle = "gray";}
        context.fillRect(115, 358, 25, 20);
        context.strokeRect(115, 358, 25, 20);

        if(rldLvl >= 3){context.fillStyle = "green";}else{context.fillStyle = "gray";}
        context.fillRect(140, 358, 25, 20);
        context.strokeRect(140, 358, 25, 20);

        if(rldLvl >= 4){context.fillStyle = "green";}else{context.fillStyle = "gray";}
        context.fillRect(165, 358, 25, 20);
        context.strokeRect(165, 358, 25, 20);

        if(rldLvl >= 5){context.fillStyle = "green";}else{context.fillStyle = "gray";}
        context.fillRect(190, 358, 25, 20);
        context.strokeRect(190, 358, 25, 20);

        if(rldLvl >= 6){context.fillStyle = "green";}else{context.fillStyle = "gray";}
        context.fillRect(215, 358, 25, 20);
        context.strokeRect(215, 358, 25, 20);

        if(rldLvl >= 7){context.fillStyle = "green";}else{context.fillStyle = "gray";}
        context.fillRect(240, 358, 25, 20);
        context.strokeRect(240, 358, 25, 20);

        if(rldLvl >= 8){context.fillStyle = "green";}else{context.fillStyle = "gray";}
        context.fillRect(265, 358, 25, 20);
        context.strokeRect(265, 358, 25, 20);

        if(rldLvl >= 9){context.fillStyle = "green";}else{context.fillStyle = "gray";}
        context.fillRect(290, 358, 25, 20);
        context.strokeRect(290, 358, 25, 20);

        if(rldLvl >= 10){context.fillStyle = "green";}else{context.fillStyle = "gray";}
        context.fillRect(315, 358, 25, 20);
        context.strokeRect(315, 358, 25, 20);

        context.fillStyle = "green";
        context.strokeStyle = "black";
        context.fillRect(355, 323, 140, 50);
        context.strokeRect(355, 323, 140, 50);

        if(rldLvl < 10){
            if(powerupCost[rldLvl] < 1000){
                context.fillStyle = "white";
                context.font="italic small-caps bold 36px arial";
                context.fillText(powerupCost[rldLvl] , 393, 361);
            }

            if(powerupCost[rldLvl] >= 1000 && powerupCost[rldLvl] < 10000){
                context.fillStyle = "white";
                context.font="italic small-caps bold 36px arial";
                context.fillText(powerupCost[rldLvl] , 383, 361);
            }
        }else{
            context.fillStyle = "white";
            context.font="italic small-caps bold 36px arial";
            context.fillText("MAX" , 380, 361);   
        }


        //Stars
        drawImage(star, 10, 422, 60, 60);
        context.beginPath();

        context.fillStyle = "white";
        context.font="italic small-caps 20px arial";
        context.fillText("Earnings" , 165, 445);

        context.strokeStyle = "black";


        if(mnyLvl >= 1){context.fillStyle = "yellow";}else{context.fillStyle = "gray";}
        context.fillRect(90, 462, 25, 20);
        context.strokeRect(90, 462, 25, 20);


        if(mnyLvl >= 2){context.fillStyle = "yellow";}else{context.fillStyle = "gray";}
        context.fillRect(115, 462, 25, 20);
        context.strokeRect(115, 462, 25, 20);

        if(mnyLvl >= 3){context.fillStyle = "yellow";}else{context.fillStyle = "gray";}
        context.fillRect(140, 462, 25, 20);
        context.strokeRect(140, 462, 25, 20);

        if(mnyLvl >= 4){context.fillStyle = "yellow";}else{context.fillStyle = "gray";}
        context.fillRect(165, 462, 25, 20);
        context.strokeRect(165, 462, 25, 20);

        if(mnyLvl >= 5){context.fillStyle = "yellow";}else{context.fillStyle = "gray";}
        context.fillRect(190, 462, 25, 20);
        context.strokeRect(190, 462, 25, 20);

        if(mnyLvl >= 6){context.fillStyle = "yellow";}else{context.fillStyle = "gray";}
        context.fillRect(215, 462, 25, 20);
        context.strokeRect(215, 462, 25, 20);

        if(mnyLvl >= 7){context.fillStyle = "yellow";}else{context.fillStyle = "gray";}
        context.fillRect(240, 462, 25, 20);
        context.strokeRect(240, 462, 25, 20);

        if(mnyLvl >= 8){context.fillStyle = "yellow";}else{context.fillStyle = "gray";}
        context.fillRect(265, 462, 25, 20);
        context.strokeRect(265, 462, 25, 20);

        if(mnyLvl >= 9){context.fillStyle = "yellow";}else{context.fillStyle = "gray";}
        context.fillRect(290, 462, 25, 20);
        context.strokeRect(290, 462, 25, 20);

        if(mnyLvl >= 10){context.fillStyle = "yellow";}else{context.fillStyle = "gray";}
        context.fillRect(315, 462, 25, 20);
        context.strokeRect(315, 462, 25, 20);    

        context.fillStyle = "green";
        context.strokeStyle = "black";
        context.fillRect(355, 427, 140, 50);
        context.strokeRect(355, 427, 140, 50);

        if(mnyLvl < 10){
            if(powerupCost[mnyLvl] < 1000){
                context.fillStyle = "white";
                context.font="italic small-caps bold 36px arial";
                context.fillText(powerupCost[mnyLvl] , 393, 464);
            }

            if(powerupCost[mnyLvl] >= 1000 && powerupCost[mnyLvl] < 10000){
                context.fillStyle = "white";
                context.font="italic small-caps bold 36px arial";
                context.fillText(powerupCost[mnyLvl] , 383, 464);
            }
        }else{
            context.fillStyle = "white";
            context.font="italic small-caps bold 36px arial";
            context.fillText("MAX" , 380, 464);   
        }


        //Player ship
        context.strokeStyle = "black";
        context.strokeRect(540, 30, 200, 200);
        context.strokeRect(539, 29, 202, 202);
        context.strokeRect(538, 28, 204, 204);

        context.fillStyle = "purple";
        context.fillRect(540, 30, 200, 200);

        if(pShip == 1){
            ship1.draw(540, 30, 200, 200);
        }
        
        if(pShip == 2){
            ship2.draw(540, 30, 200, 200);
        }


        if(pShip == 3){
            ship3.draw(540, 30, 200, 200);
        }

        if(pShip == 4){
            ship4.draw(540, 30, 200, 200);
        }

        if(pShip == 5){
            ship5.draw(540, 30, 200, 200);
        }
        
        if(pShip == 6){
            ship6.draw(540, 30, 200, 200);
        }
        
        if(pShip == 7){
            ship7.draw(540, 30, 200, 200);
        }
        
        if(pShip == 8){
            ship8.draw(540, 30, 200, 200);
        }
        
        if(pShip == 9){
            ship9.draw(540, 30, 200, 200);
        }
        
        if(pShip == 10){
            ship10.draw(540, 30, 200, 200);
        }
        
        if(pShip == 11){
            ship11.draw(540, 30, 200, 200);
        }
        
        if(pShip == 12){
            ship12.draw(540, 30, 200, 200);
        }


        //Player Bullet
        context.strokeStyle = "black";
        context.strokeRect(540, 280, 200, 200);
        context.strokeRect(539, 279, 202, 202);
        context.strokeRect(538, 278, 204, 204);

        context.fillStyle = "purple";
        context.fillRect(540, 280, 200, 200);

        if(pBullet == 1){
            bullet1.draw(540, 280, 200, 200);
        }

        if(pBullet == 2){
            bullet2.draw(540, 280, 200, 200);
        }

        
        if(pBullet == 3){
            bullet3.draw(540, 280, 200, 200);
        }

        
        if(pBullet == 4){
            bullet4.draw(540, 280, 200, 200); 
        }

        
        if(pBullet == 5){
            bullet5.draw(540, 280, 200, 200);
        }

        
        if(pBullet == 6){
            bullet6.draw(540, 280, 200, 200);
        }

        
        if(pBullet == 7){
            bullet7.draw(540, 280, 200, 200);
        }

        if(pBullet == 8){
            bullet8.draw(540, 280, 200, 200);
        }


        if(pBullet == 9){
            bullet9.draw(540, 280, 200, 200);
        }

        
        if(pBullet == 10){
            bullet10.draw(540, 280, 200, 200);
        }

        
        if(pBullet == 11){
            bullet11.draw(540, 280, 200, 200);
        }

        
        if(pBullet == 12){
            bullet12.draw(540, 280, 200, 200);
        }

        
        if(pBullet == 13){
            bullet13.draw(540, 280, 200, 200);
        }

        
        if(pBullet == 14){
            bullet14.draw(540, 280, 200, 200);
        }


        if(pBullet == 15){
            bullet15.draw(540, 280, 200, 200);
        }

        
        if(pBullet == 16){
            bullet16.draw(540, 280, 200, 200);
        }

        
        if(pBullet == 17){
            bullet17.draw(540, 280, 200, 200);
        }

        
        if(pBullet == 18){
            bullet18.draw(540, 280, 200, 200);
        }

        
        if(pBullet == 19){
            bullet19.draw(540, 280, 200, 200);
        }


        //Back Button
        context.fillStyle = "purple";
        context.fillRect(530, 530, 220 ,50);

        context.fillStyle = "white";
        context.font="italic small-caps bold 40px arial";
        context.fillText("Back", 595, 565);


        //Money
        drawImage(star, 10, 530, 50,50);

        context.fillStyle = "white";
        context.font="italic small-caps 50px arial";
        context.fillText("x", 70, 570);

        context.fillStyle = "white";
        context.font="italic small-caps 62px arial";
        context.fillText(pMoney, 110, 578);
        
    }
}