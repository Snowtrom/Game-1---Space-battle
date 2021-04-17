function drawShips(){
    if(menu == "ships"){
        
        drawImage(backStars, 0, 0, 800, 600);
        context.fillStyle = "#4A148C";
        context.fillRect(20, 240, 250,340)

        context.fillStyle = "#880E4F";
        context.fillRect(20, 20, 250 ,220);

        context.strokeStyle = "purple";
        context.strokeRect(20, 20, 250, 560);

        if(pShip == 1){
            ship1.draw(70, 80, 150, 150);
        }
        if(pShip == 2){
            ship2.draw(70, 80, 150, 150);
        }
        if(pShip == 3){
            ship3.draw(70, 80, 150, 150);
        }
        if(pShip == 4){
            ship4.draw(70, 80, 150, 150);
        }
        if(pShip == 5){
            ship5.draw(70, 80, 150, 150);
        }
        if(pShip == 6){
            ship6.draw(70, 80, 150, 150);
        }
        if(pShip == 7){
            ship7.draw(70, 80, 150, 150);
        }
        if(pShip == 8){
            ship8.draw(70, 80, 150, 150);
        }
        if(pShip == 9){
            ship9.draw(70, 80, 150, 150);
        }
        if(pShip == 10){
            ship10.draw(70, 80, 150, 150);
        }
        if(pShip == 11){
            ship11.draw(70, 80, 150, 150);
        }
        if(pShip == 12){
            ship12.draw(70, 80, 150, 150);
        }

        context.fillStyle = "white";
        context.font="italic small-caps bold 40px arial";
        context.fillText(`Your Ship` , 45, 60);


        //health drawing
        context.fillStyle = "pink";
        context.font="italic small-caps bold 30px arial";
        context.fillText(`Health: ${totalhp}` , 40, 280);

        //body damage drawing
        context.fillStyle = "red";
        context.font="italic small-caps bold 30px arial";
        context.fillText(`B.DMG: ${totalbd}` , 40, 340);

        //attack drawing
        context.fillStyle = "orange";
        context.font="italic small-caps bold 30px arial";
        context.fillText(`Attack: ${totalatt}` , 40, 400);

        //reload drawing
        context.fillStyle = "green";
        context.font="italic small-caps bold 30px arial";
        context.fillText(`Reload: ${totalrld}` , 40, 460);

        //earnings drawing
        context.fillStyle = "yellow";
        context.font="italic small-caps bold 30px arial";
        context.fillText(`Earning: ${totalmny}%` , 40, 520);

        


        drawImage(sign, 450, -10, 170, 170);
        context.fillStyle = "white";
        context.font="italic small-caps bold 55px arial";
        context.fillText(`Ships` , 456, 105);

        
        
        if(ship1.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(300, 190, 100, 100);


        if(ship2.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(423, 190, 100, 100);


        if(ship3.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(546, 190, 100, 100);


        if(ship4.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(669, 190, 100, 100);


        if(ship5.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(300, 310, 100, 100);



        if(ship6.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(423, 310, 100, 100);



        if(ship7.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(546, 310, 100, 100);



        if(ship8.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(669, 310, 100, 100);



        if(ship9.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(300, 430, 100, 100);



        if(ship10.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(423, 430, 100, 100);



        if(ship11.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(546, 430, 100, 100);



        if(ship12.owned){
            context.fillStyle = "green";
        }else{
            context.fillStyle = "red";
        }

        context.fillRect(669, 430, 100, 100);



        ship1.draw(300, 190, 100, 100);
        ship2.draw(423, 190, 100, 100);
        ship3.draw(546, 190, 100, 100);
        ship4.draw(669, 190, 100, 100);


        ship5.draw(300, 310, 100, 100);
        ship6.draw(423, 310, 100, 100);
        ship7.draw(546, 310, 100, 100);
        ship8.draw(669, 310, 100, 100);

        ship9.draw(300, 430, 100, 100);
        ship10.draw(423, 430, 100, 100);
        ship11.draw(546, 430, 100, 100);
        ship12.draw(669, 430, 100, 100);
    
    
        
        context.fillStyle = "green";
        context.fillRect(630, 558, 140, 25);

        if(mouseX >= 630 && mouseX <= 770 && mouseY >= 558 && mouseY <= 583 && littlemenu == "nothing"){
            context.fillStyle = "purple";
        }else{
            context.fillStyle = "white";
        }

        context.font="italic small-caps bold 30px arial";
        context.fillText(`Back <<<` , 630, 580);




        //Ship 1 buying card
        if(littlemenu == "ship1_card"){
           
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`SA-23E Aurora` , 305, 110);

            
            ship1.draw(320, 170, 180, 180);
            
            context.fillStyle = "pink";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Health: ${ship1.hp}` , 550, 190);

            context.fillStyle = "red";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`B.DMG: ${ship1.bd}` , 550, 240);

            context.fillStyle = "orange";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Attack: ${ship1.att}` , 550, 290);
            
            context.fillStyle = "green";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Reload: ${ship1.rld}` , 550, 340);

            context.fillStyle = "yellow";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Earning: ${ship1.mny}%` , 550, 390);

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(ship1.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${ship1.cost}`, 350, 390);
            }






        //Ship 2 buying card
        }else if(littlemenu == "ship2_card"){
            
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 48px arial";
            context.fillText(`SA-43 HammerHead` , 305, 110);

            
            ship2.draw(320, 170, 180, 180);
            
            context.fillStyle = "pink";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Health: ${ship2.hp}` , 550, 190);

            context.fillStyle = "red";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`B.DMG: ${ship2.bd}` , 550, 240);

            context.fillStyle = "orange";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Attack: ${ship2.att}` , 550, 290);
            
            context.fillStyle = "green";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Reload: ${ship2.rld}` , 550, 340);

            context.fillStyle = "yellow";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Earning: ${ship2.mny}%` , 550, 390);

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(ship2.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${ship2.cost}`, 345, 390);
            }






        //Ship 3 buying card
        }else if(littlemenu == "ship3_card"){

            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 45px arial";
            context.fillText(`ARC170 StarFighter` , 305, 110);

            
            ship3.draw(320, 170, 180, 180);
            
            context.fillStyle = "pink";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Health: ${ship3.hp}` , 550, 190);

            context.fillStyle = "red";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`B.DMG: ${ship3.bd}` , 550, 240);

            context.fillStyle = "orange";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Attack: ${ship3.att}` , 550, 290);
            
            context.fillStyle = "green";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Reload: ${ship3.rld}` , 550, 340);

            context.fillStyle = "yellow";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Earning: ${ship3.mny}%` , 550, 390);

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(ship3.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${ship3.cost}`, 345, 390);
            }







        //Ship 4 buying card        
        }else if(littlemenu == "ship4_card"){
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 45px arial";
            context.fillText(`Raider Fighter` , 370, 110);

            
            ship4.draw(320, 170, 180, 180);
            
            context.fillStyle = "pink";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Health: ${ship4.hp}` , 550, 190);

            context.fillStyle = "red";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`B.DMG: ${ship4.bd}` , 550, 240);

            context.fillStyle = "orange";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Attack: ${ship4.att}` , 550, 290);
            
            context.fillStyle = "green";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Reload: ${ship4.rld}` , 550, 340);

            context.fillStyle = "yellow";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Earning: ${ship4.mny}%` , 550, 390);

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(ship4.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${ship4.cost}`, 330, 390);
            }





        //Ship 5 buying card
        }else if(littlemenu == "ship5_card"){

            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`Eagle 5` , 440, 110);

            
            ship5.draw(320, 170, 180, 180);
            
            context.fillStyle = "pink";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Health: ${ship5.hp}` , 550, 190);

            context.fillStyle = "red";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`B.DMG: ${ship5.bd}` , 550, 240);

            context.fillStyle = "orange";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Attack: ${ship5.att}` , 550, 290);
            
            context.fillStyle = "green";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Reload: ${ship5.rld}` , 550, 340);

            context.fillStyle = "yellow";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Earning: ${ship5.mny}%` , 550, 390);

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(ship5.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${ship5.cost}`, 330, 390);
            }





        //Ship 6 buying card
        }else if(littlemenu == "ship6_card"){
            
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`Cyclon Raider` , 310, 110);

            
            ship6.draw(320, 170, 180, 180);
            
            context.fillStyle = "pink";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Health: ${ship6.hp}` , 550, 190);

            context.fillStyle = "red";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`B.DMG: ${ship6.bd}` , 550, 240);

            context.fillStyle = "orange";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Attack: ${ship6.att}` , 550, 290);
            
            context.fillStyle = "green";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Reload: ${ship6.rld}` , 550, 340);

            context.fillStyle = "yellow";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Earning: ${ship6.mny}%` , 550, 390);

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(ship6.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${ship6.cost}`, 330, 390);
            }






        //Ship 7 buying card
        }else if(littlemenu == "ship7_card"){
            
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`Explorer` , 400, 110);

            
            ship7.draw(320, 170, 180, 180);
            
            context.fillStyle = "pink";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Health: ${ship7.hp}` , 550, 190);

            context.fillStyle = "red";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`B.DMG: ${ship7.bd}` , 550, 240);

            context.fillStyle = "orange";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Attack: ${ship7.att}` , 550, 290);
            
            context.fillStyle = "green";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Reload: ${ship7.rld}` , 550, 340);

            context.fillStyle = "yellow";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Earning: ${ship7.mny}%` , 550, 390);

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(ship7.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${ship7.cost}`, 330, 390);
            }




        //Ship 8 buying card
        }else if(littlemenu == "ship8_card"){
            
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`Phoenix` , 420, 110);

            
            ship8.draw(320, 170, 180, 180);
            
            context.fillStyle = "pink";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Health: ${ship8.hp}` , 550, 190);

            context.fillStyle = "red";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`B.DMG: ${ship8.bd}` , 550, 240);

            context.fillStyle = "orange";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Attack: ${ship8.att}` , 550, 290);
            
            context.fillStyle = "green";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Reload: ${ship8.rld}` , 550, 340);

            context.fillStyle = "yellow";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Earning: ${ship8.mny}%` , 550, 390);

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(ship8.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${ship8.cost}`, 330, 390);
            }






        //Ship 9 buying card
        }else if(littlemenu == "ship9_card"){
            
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`Death Glider` , 340, 110);

            
            ship9.draw(320, 170, 180, 180);
            
            context.fillStyle = "pink";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Health: ${ship9.hp}` , 550, 190);

            context.fillStyle = "red";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`B.DMG: ${ship9.bd}` , 550, 240);

            context.fillStyle = "orange";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Attack: ${ship9.att}` , 550, 290);
            
            context.fillStyle = "green";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Reload: ${ship9.rld}` , 550, 340);

            context.fillStyle = "yellow";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Earning: ${ship9.mny}%` , 550, 390);

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(ship9.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${ship9.cost}`, 330, 390);
            }








        //Ship 10 buying card
        }else if(littlemenu == "ship10_card"){
            
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 45px arial";
            context.fillText(`Colonial Blackbird` , 310, 110);

            
            ship10.draw(320, 170, 180, 180);
            
            context.fillStyle = "pink";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Health: ${ship10.hp}` , 550, 190);

            context.fillStyle = "red";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`B.DMG: ${ship10.bd}` , 550, 240);

            context.fillStyle = "orange";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Attack: ${ship10.att}` , 550, 290);
            
            context.fillStyle = "green";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Reload: ${ship10.rld}` , 550, 340);

            context.fillStyle = "yellow";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Earning: ${ship10.mny}%` , 550, 390);

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(ship10.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${ship10.cost}`, 330, 390);
            }





        //Ship 11 buying card
        }else if(littlemenu == "ship11_card"){
            
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 60px arial";
            context.fillText(`Liberty` , 430, 110);

            
            ship11.draw(320, 170, 180, 180);
            
            context.fillStyle = "pink";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Health: ${ship11.hp}` , 550, 190);

            context.fillStyle = "red";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`B.DMG: ${ship11.bd}` , 550, 240);

            context.fillStyle = "orange";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Attack: ${ship11.att}` , 550, 290);
            
            context.fillStyle = "green";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Reload: ${ship11.rld}` , 550, 340);

            context.fillStyle = "yellow";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Earning: ${ship11.mny}%` , 550, 390);

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(ship11.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${ship11.cost}`, 330, 390);
            }








        //Ship 12 buying card
        }else if(littlemenu == "ship12_card"){
            
            context.fillStyle = "purple";
            context.fillRect(300, 40, 470, 520);

            context.fillStyle = "blue";
            context.font="italic small-caps bold 42px arial";
            context.fillText(`Battlestar Galactica` , 305, 110);

            
            ship12.draw(320, 170, 180, 180);
            
            context.fillStyle = "pink";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Health: ${ship12.hp}` , 550, 190);

            context.fillStyle = "red";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`B.DMG: ${ship12.bd}` , 550, 240);

            context.fillStyle = "orange";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Attack: ${ship12.att}` , 550, 290);
            
            context.fillStyle = "green";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Reload: ${ship12.rld}` , 550, 340);

            context.fillStyle = "yellow";
            context.font="italic small-caps bold 30px arial";
            context.fillText(`Earning: ${ship12.mny}%` , 550, 390);

            context.fillStyle = "green";
            context.fillRect(350, 490, 150, 50);
            context.fillRect(600, 490, 150, 50);

            context.fillStyle = "white";
            context.font="italic small-caps bold 40px arial";
            context.fillText("Back", 625, 528);
            
            if(ship12.owned){
                context.fillText("Select", 355, 528);
            }else{
                context.fillText("Buy", 388, 528);
                context.font="italic small-caps bold 30px arial";
                context.fillText(`Cost: ${ship12.cost}`, 320, 390);
            }

        }
    }
}