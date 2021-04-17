function drawBullets(){
    if(menu == "bullets"){
        drawImage(backStars, 0, 0, 800, 600);

        context.fillStyle = "#880E4F"; 
        context.strokeStyle = "black";
        context.fillRect(20, 20, 200, 200);
        context.strokeRect(20, 20, 200, 200);

        context.fillStyle = "#4A148C";
        context.fillRect(20, 220, 199, 40);

        context.fillStyle = "white";
        context.font="italic small-caps bold 30px arial";
        context.fillText(`Your Bullet` , 25, 55);


        context.fillStyle = "orange";
        context.font="italic small-caps bold 30px arial";

        if(pBullet == 1){
            bullet1.draw(40, 60, 160, 155);
            context.fillText(`Attack: ${bullet1.dmg}` , 25, 250);
        }

        if(pBullet == 2){
            bullet2.draw(40, 60, 160, 155);
            context.fillText(`Attack: ${bullet2.dmg}` , 25, 250);
        }

        if(pBullet == 3){
            bullet3.draw(40, 60, 160, 155);
            context.fillText(`Attack: ${bullet3.dmg}` , 25, 250);
        }

        if(pBullet == 4){
            bullet4.draw(40, 60, 160, 155);
            context.fillText(`Attack: ${bullet4.dmg}` , 25, 250);
        }

        if(pBullet == 5){
            bullet5.draw(40, 60, 160, 155);
            context.fillText(`Attack: ${bullet5.dmg}` , 25, 250);
        }

        if(pBullet == 6){
            bullet6.draw(40, 60, 160, 155);
            context.fillText(`Attack: ${bullet6.dmg}` , 25, 250);
        }

        if(pBullet == 7){
            bullet7.draw(40, 60, 160, 155);
            context.fillText(`Attack: ${bullet7.dmg}` , 25, 250);
        }

        if(pBullet == 8){
            bullet8.draw(40, 60, 160, 155);
            context.fillText(`Attack: ${bullet8.dmg}` , 25, 250);
        }

        if(pBullet == 9){
            bullet9.draw(40, 60, 160, 155);
            context.fillText(`Attack: ${bullet9.dmg}` , 25, 250);
        }

        if(pBullet == 10){
            bullet10.draw(40, 60, 160, 155);
            context.fillText(`Attack: ${bullet10.dmg}` , 25, 250);
        }

        if(pBullet == 11){
            bullet11.draw(40, 60, 160, 155);
            context.fillText(`Attack: ${bullet11.dmg}` , 25, 250);
        }

        if(pBullet == 12){
            bullet12.draw(40, 60, 160, 155);
            context.fillText(`Attack: ${bullet12.dmg}` , 25, 250);
        }

        if(pBullet == 13){
            bullet13.draw(40, 60, 160, 155);
            context.fillText(`Attack: ${bullet13.dmg}` , 25, 250);
        }

        if(pBullet == 14){
            bullet14.draw(40, 60, 160, 155);
            context.fillText(`Attack: ${bullet14.dmg}` , 25, 250);
        }

        if(pBullet == 15){
            bullet15.draw(40, 60, 160, 155);
            context.fillText(`Attack: ${bullet15.dmg}` , 25, 250);
        }

        if(pBullet == 16){
            bullet16.draw(40, 60, 160, 155);
            context.fillText(`Attack: ${bullet16.dmg}` , 25, 250);
        }

        if(pBullet == 17){
            bullet17.draw(40, 60, 160, 155);
            context.fillText(`Attack: ${bullet17.dmg}` , 25, 250);
        }

        if(pBullet == 18){
            bullet18.draw(40, 60, 160, 155);
            context.fillText(`Attack: ${bullet18.dmg}` , 25, 250);
        }

        if(pBullet == 19){
            bullet19.draw(40, 60, 160, 155);
            context.fillText(`Attack: ${bullet19.dmg}` , 25, 250);
        }



        drawImage(sign, 450, -10, 150, 130);
        context.fillStyle = "white";
        context.font="italic small-caps bold 40px arial";
        context.fillText(`Bullet` , 453, 80);












        if(bullet1.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(242, 170, 90, 90);
        bullet1.draw(242, 170, 90, 90);




        if(bullet2.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(353, 170, 90, 90);
        bullet2.draw(353, 170, 90, 90);




        if(bullet3.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(464, 170, 90, 90);
        bullet3.draw(464, 170, 90, 90);




        if(bullet4.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(575, 170, 90, 90);
        bullet4.draw(575, 170, 90, 90);



        

        if(bullet5.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(686, 170, 90, 90);
        bullet5.draw(686, 170, 90, 90);





        if(bullet6.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(20, 280, 90, 90);
        bullet6.draw(20, 280, 90, 90);





        if(bullet7.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(130, 280, 90, 90);
        bullet7.draw(130, 280, 90, 90);



        if(bullet8.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(241, 280, 90, 90);
        bullet8.draw(241, 280, 90, 90);





    
        if(bullet9.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(352, 280, 90, 90);
        bullet9.draw(352, 280, 90, 90);



        
        if(bullet10.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(463, 280, 90, 90);
        bullet10.draw(463, 280, 90, 90);




        
        if(bullet11.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(574, 280, 90, 90);
        bullet11.draw(574, 280, 90, 90);




        
        if(bullet12.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(685, 280, 90, 90);
        bullet12.draw(685, 280, 90, 90);




        
        if(bullet13.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(20, 390, 90, 90);
        bullet13.draw(20, 390, 90, 90);




        
        if(bullet14.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(130, 390, 90, 90);
        bullet14.draw(130, 390, 90, 90);
    
    
    
    
    
        if(bullet15.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(241, 390, 90, 90);
        bullet15.draw(241, 390, 90, 90);





        if(bullet16.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(353, 390, 90, 90);
        bullet16.draw(353, 390, 90, 90);





        if(bullet17.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(464, 390, 90, 90);
        bullet17.draw(464, 390, 90, 90);





        if(bullet18.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(575, 390, 90, 90);
        bullet18.draw(575, 390, 90, 90);




        if(bullet19.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(686, 390, 90, 90);
        bullet19.draw(686, 390, 90, 90);







        //Back Button
        context.fillStyle = "green";
        context.fillRect(540, 510, 240, 50);

        if(mouseX >= 540 && mouseX <= 780 && mouseY >= 510 && mouseY <= 560 && littlemenu == "nothing"){
            context.fillStyle = "purple";
        }else{
            context.fillStyle = "white";
        }

        context.font="italic small-caps bold 50px arial";
        context.fillText(`Back <<<` , 548, 551);


        //Money
        drawImage(star, 20, 515, 50,50);

        context.fillStyle = "white";
        context.font="italic small-caps 50px arial";
        context.fillText("x", 80, 560);

        context.fillStyle = "white";
        context.font="italic small-caps 62px arial";
        context.fillText(pMoney, 120, 560);







        //Bullet 1 buying card
        if(littlemenu == "bullet_card_1"){


            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`Clement` , 405, 110);

            
            bullet1.draw(320, 170, 180, 180);
            
            context.fillStyle = "orange";
            context.font="italic small-caps bold 53px arial";
            context.fillText(`Attack: ${bullet1.dmg}` , 510, 290);
        

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(bullet1.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${bullet1.cost}`, 350, 390);
            }






        //Bullet 2 buying card
        }else if(littlemenu == "bullet_card_2"){

            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`Rimfire` , 430, 110);

            
            bullet2.draw(320, 170, 180, 180);
            
            context.fillStyle = "orange";
            context.font="italic small-caps bold 50px arial";
            context.fillText(`Attack: ${bullet2.dmg}` , 510, 290);
        

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(bullet2.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${bullet2.cost}`, 340, 390);
            }
        
        
        
        
        
        //Bullet 3 buying card
        }else if(littlemenu == "bullet_card_3"){

            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`22BB` , 470, 110);

            
            bullet3.draw(320, 170, 180, 180);
            
            context.fillStyle = "orange";
            context.font="italic small-caps bold 50px arial";
            context.fillText(`Attack: ${bullet3.dmg}` , 510, 290);
        

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(bullet3.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${bullet3.cost}`, 340, 390);
            }





        //Bullet 4 buying card
        }else if(littlemenu == "bullet_card_4"){
            
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`Tokarev` , 410, 110);

            
            bullet4.draw(320, 170, 180, 180);
            
            context.fillStyle = "orange";
            context.font="italic small-caps bold 50px arial";
            context.fillText(`Attack: ${bullet4.dmg}` , 510, 290);
        

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(bullet4.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${bullet4.cost}`, 340, 390);
            }








        //Bullet 5 buying card
        }else if(littlemenu == "bullet_card_5"){
            
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 47px arial";
            context.fillText(`Remington Rimfire` , 315, 110);

            
            bullet5.draw(320, 170, 180, 180);
            
            context.fillStyle = "orange";
            context.font="italic small-caps bold 50px arial";
            context.fillText(`Attack: ${bullet5.dmg}` , 510, 290);
        

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(bullet5.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${bullet5.cost}`, 340, 390);
            }




        //Bullet 6 buying card
        }else if(littlemenu == "bullet_card_6"){
         
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`22CB` , 470, 110);

            
            bullet6.draw(320, 170, 180, 180);
            
            context.fillStyle = "orange";
            context.font="italic small-caps bold 45px arial";
            context.fillText(`Attack: ${bullet6.dmg}` , 510, 290);
        

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(bullet6.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${bullet6.cost}`, 340, 390);
            }





        //Bullet 7 buying card
        }else if(littlemenu == "bullet_card_7"){
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`Bergmann` , 390, 110);

            
            bullet7.draw(320, 170, 180, 180);
            
            context.fillStyle = "orange";
            context.font="italic small-caps bold 45px arial";
            context.fillText(`Attack: ${bullet7.dmg}` , 510, 290);
        

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(bullet7.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${bullet7.cost}`, 340, 390);
            }
        
        
        
        
        
        //Bullet 8 buying card
        }else if(littlemenu == "bullet_card_8"){
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 55px arial";
            context.fillText(`Magnum Rimfire` , 310, 110);

            
            bullet8.draw(320, 170, 180, 180);
            
            context.fillStyle = "orange";
            context.font="italic small-caps bold 45px arial";
            context.fillText(`Attack: ${bullet8.dmg}` , 510, 290);
        

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(bullet8.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${bullet8.cost}`, 340, 390);
            }
        
        
        
        
        

        //Bullet 9 buying card
        }else if(littlemenu == "bullet_card_9"){
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`22LR` , 470, 110);

            
            bullet9.draw(320, 170, 180, 180);
            
            context.fillStyle = "orange";
            context.font="italic small-caps bold 45px arial";
            context.fillText(`Attack: ${bullet9.dmg}` , 510, 290);
        

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(bullet9.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${bullet9.cost}`, 340, 390);
            }
        
        
        
        
        

        //Bullet 10 buying card
        }else if(littlemenu == "bullet_card_10"){
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`Power-Mag` , 390, 110);

            
            bullet10.draw(320, 170, 180, 180);
            
            context.fillStyle = "orange";
            context.font="italic small-caps bold 45px arial";
            context.fillText(`Attack: ${bullet10.dmg}` , 510, 290);
        

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(bullet10.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${bullet10.cost}`, 340, 390);
            }
        
        
        
        
        
        
        

        //Bullet 11 buying card
        }else if(littlemenu == "bullet_card_11"){
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`Cor - Bon` , 390, 110);

            
            bullet11.draw(320, 170, 180, 180);
            
            context.fillStyle = "orange";
            context.font="italic small-caps bold 45px arial";
            context.fillText(`Attack: ${bullet11.dmg}` , 510, 290);
        

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(bullet11.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${bullet11.cost}`, 340, 390);
            }
        
        
        
        

        //Bullet 12 buying card
        }else if(littlemenu == "bullet_card_12"){
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 55px arial";
            context.fillText(`Action Express` , 325, 110);

            
            bullet12.draw(320, 170, 180, 180);
            
            context.fillStyle = "orange";
            context.font="italic small-caps bold 45px arial";
            context.fillText(`Attack: ${bullet12.dmg}` , 510, 290);
        

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(bullet12.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${bullet12.cost}`, 340, 390);
            }
        
        
        
        
        

        //Bullet 13 buying card
        }else if(littlemenu == "bullet_card_13"){
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 46px arial";
            context.fillText(`Remington Magnum` , 310, 110);

            
            bullet13.draw(320, 170, 180, 180);
            
            context.fillStyle = "orange";
            context.font="italic small-caps bold 45px arial";
            context.fillText(`Attack: ${bullet13.dmg}` , 510, 290);
        

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(bullet13.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${bullet13.cost}`, 340, 390);
            }
        
        
        
        
        


        //Bullet 14 buying card
        }else if(littlemenu == "bullet_card_14"){
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 55px arial";
            context.fillText(`Super magnum` , 335, 110);

            
            bullet14.draw(320, 170, 180, 180);
            
            context.fillStyle = "orange";
            context.font="italic small-caps bold 45px arial";
            context.fillText(`Attack: ${bullet14.dmg}` , 510, 290);
        

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(bullet14.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${bullet14.cost}`, 340, 390);
            }
        
        
        
        
        
        

        //Bullet 15 buying card
        }else if(littlemenu == "bullet_card_15"){
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 45px arial";
            context.fillText(`Winchester Magnum` , 303, 110);

            
            bullet15.draw(320, 170, 180, 180);
            
            context.fillStyle = "orange";
            context.font="italic small-caps bold 45px arial";
            context.fillText(`Attack: ${bullet15.dmg}` , 510, 290);
        

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(bullet15.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${bullet15.cost}`, 340, 390);
            }
        
        
        
        
        

        //Bullet 16 buying card
        }else if(littlemenu == "bullet_card_16"){
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 55px arial";
            context.fillText(`Wildy Magnum` , 333, 110);

            
            bullet16.draw(320, 170, 180, 180);
            
            context.fillStyle = "orange";
            context.font="italic small-caps bold 45px arial";
            context.fillText(`Attack: ${bullet16.dmg}` , 510, 290);
        

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(bullet16.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${bullet16.cost}`, 340, 390);
            }
        
        
        
        



        //Bullet 17 buying card
        }else if(littlemenu == "bullet_card_17"){
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`Tranter` , 410, 110);

            
            bullet17.draw(320, 170, 180, 180);
            
            context.fillStyle = "orange";
            context.font="italic small-caps bold 45px arial";
            context.fillText(`Attack: ${bullet17.dmg}` , 510, 290);
        

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(bullet17.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${bullet17.cost}`, 340, 390);
            }
        
        
        
        
        

        //Bullet 18 buying card
        }else if(littlemenu == "bullet_card_18"){
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`Marlin` , 430, 110);

            
            bullet18.draw(320, 170, 180, 180);
            
            context.fillStyle = "orange";
            context.font="italic small-caps bold 45px arial";
            context.fillText(`Attack: ${bullet18.dmg}` , 510, 290);
        

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(bullet18.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 45px arial";
                context.fillText(`Cost: ${bullet18.cost}`, 340, 390);
            }
        
        
        
        
        
        //Bullet 19 buying card
        }else if(littlemenu == "bullet_card_19"){
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`Avenger` , 405, 110);

            
            bullet19.draw(320, 170, 180, 180);
            
            context.fillStyle = "orange";
            context.font="italic small-caps bold 45px arial";
            context.fillText(`Attack: ${bullet19.dmg}` , 510, 290);
        

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(bullet19.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${bullet19.cost}`, 340, 390);
            }
        }
    }bullet2
}