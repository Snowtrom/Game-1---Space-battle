function clickShips(){
    if(menu == "ships"){
        if(mouseX >= 630 && mouseX <= 770 && mouseY >= 558 && mouseY <= 583 && littlemenu == "nothing"){
            menu = "shop";
        }



        if(littlemenu == "nothing"){
            if(mouseX >= 300 && mouseX <= 400 && mouseY >= 190 && mouseY <= 290){
                littlemenu = "ship1_card";
            }

            if(mouseX >= 423 && mouseX <= 523 && mouseY >= 190 && mouseY <= 290){
                littlemenu = "ship2_card";
            }

            if(mouseX >= 546 && mouseX <= 646 && mouseY >= 190 && mouseY <= 290){
                littlemenu = "ship3_card";
            }        

            if(mouseX >= 669 && mouseX <= 769 && mouseY >= 190 && mouseY <= 290){
                littlemenu = "ship4_card";
            }



            if(mouseX >= 300 && mouseX <= 400 && mouseY >= 310 && mouseY <= 410){
                littlemenu = "ship5_card";
            }

            if(mouseX >= 423 && mouseX <= 523 && mouseY >= 310 && mouseY <= 410){
                littlemenu = "ship6_card";
            }

            if(mouseX >= 546 && mouseX <= 646 && mouseY >= 310 && mouseY <= 410){
                littlemenu = "ship7_card";
            }        

            if(mouseX >= 669 && mouseX <= 769 && mouseY >= 310  && mouseY <= 410){
                littlemenu = "ship8_card";
            }  



            if(mouseX >= 300 && mouseX <= 400 && mouseY >= 430 && mouseY <= 530){
                littlemenu = "ship9_card";
            }

            if(mouseX >= 423 && mouseX <= 523 && mouseY >= 430 && mouseY <= 530){
                littlemenu = "ship10_card";
            }

            if(mouseX >= 546 && mouseX <= 646 && mouseY >= 430 && mouseY <= 530){
                littlemenu = "ship11_card";
            }        

            if(mouseX >= 669 && mouseX <= 769 && mouseY >= 430 && mouseY <= 530){
                littlemenu = "ship12_card";
            }
        }else{

            //Ship 1 menu
            if(littlemenu == "ship1_card"){
                
                //buy ship 1
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && ship1.owned == false && pMoney >= ship1.cost){
                    pShip = 1;
                    ship1.owned = true;
                    pMoney -= ship1.cost;
                }

                //select ship 1
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && ship1.owned == true){
                    pShip = 1;
                }

                //Back
                if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                    littlemenu = "nothing";
                }
            }





            //Ship 2 menu
            if(littlemenu == "ship2_card"){
                
                //buy ship 2
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && ship2.owned == false && pMoney >= ship2.cost){
                    pShip = 2;
                    ship2.owned = true;
                    pMoney -= ship2.cost;
                }

                //select ship 2
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && ship2.owned == true){
                    pShip = 2;
                }

                //Back
                if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                    littlemenu = "nothing";
                }
            }





            
            //Ship 3 menu
            if(littlemenu == "ship3_card"){
                
                //buy ship 3
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && ship3.owned == false && pMoney >= ship3.cost){
                    pShip = 3;
                    ship3.owned = true;
                    pMoney -= ship3.cost;
                }

                //select ship 3
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && ship3.owned == true){
                    pShip = 3;
                }

                //Back
                if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                    littlemenu = "nothing";
                }
            }







            //Ship 4 menu
            if(littlemenu == "ship4_card"){
                
                //buy ship 4
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && ship4.owned == false && pMoney >= ship4.cost){
                    pShip = 4;
                    ship4.owned = true;
                    pMoney -= ship4.cost;
                }

                //select ship 4
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && ship4.owned == true){
                    pShip = 4;
                }

                //Back
                if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                    littlemenu = "nothing";
                }
            }










            //Ship 5 menu
            if(littlemenu == "ship5_card"){
                
                //buy ship 5
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && ship5.owned == false && pMoney >= ship5.cost){
                    pShip = 5;
                    ship5.owned = true;
                    pMoney -= ship5.cost;
                }

                //select ship 5
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && ship5.owned == true){
                    pShip = 5;
                }

                //Back
                if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                    littlemenu = "nothing";
                }
            }







        

            //Ship 6 menu
            if(littlemenu == "ship6_card"){
                
                //buy ship 6
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && ship6.owned == false && pMoney >= ship6.cost){
                    pShip = 6;
                    ship6.owned = true;
                    pMoney -= ship6.cost;
                }

                //select ship 6
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && ship6.owned == true){
                    pShip = 6;
                }

                //Back
                if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                    littlemenu = "nothing";
                }
            }









            //Ship 7 menu
            if(littlemenu == "ship7_card"){
                
                //buy ship 7
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && ship7.owned == false && pMoney >= ship7.cost){
                    pShip = 7;
                    ship7.owned = true;
                    pMoney -= ship7.cost;
                }

                //select ship 7
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && ship7.owned == true){
                    pShip = 7;
                }

                //Back
                if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                    littlemenu = "nothing";
                }
            }









            //Ship 8 menu
            if(littlemenu == "ship8_card"){
                
                //buy ship 8
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && ship8.owned == false && pMoney >= ship8.cost){
                    pShip = 8;
                    ship8.owned = true;
                    pMoney -= ship8.cost;
                }

                //select ship 8
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && ship8.owned == true){
                    pShip = 8;
                }

                //Back
                if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                    littlemenu = "nothing";
                }
            }











            //Ship 9 menu
            if(littlemenu == "ship9_card"){
                
                //buy ship 9
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && ship9.owned == false && pMoney >= ship9.cost){
                    pShip = 9;
                    ship9.owned = true;
                    pMoney -= ship9.cost;
                }

                //select ship 9
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && ship9.owned == true){
                    pShip = 9;
                }

                //Back
                if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                    littlemenu = "nothing";
                }
            }










            //Ship 10 menu
            if(littlemenu == "ship10_card"){
                
                //buy ship 10
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && ship10.owned == false && pMoney >= ship10.cost){
                    pShip = 10;
                    ship10.owned = true;
                    pMoney -= ship10.cost;
                }

                //select ship 10
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && ship10.owned == true){
                    pShip = 10;
                }

                //Back
                if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                    littlemenu = "nothing";
                }
            }










            //Ship 11 menu
            if(littlemenu == "ship11_card"){
                
                //buy ship 11
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && ship11.owned == false && pMoney >= ship11.cost){
                    pShip = 11;
                    ship11.owned = true;
                    pMoney -= ship11.cost;
                }

                //select ship 11
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && ship11.owned == true){
                    pShip = 11;
                }

                //Back
                if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                    littlemenu = "nothing";
                }
            }









            //Ship 12 menu
            if(littlemenu == "ship12_card"){
                
                //buy ship 12
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && ship12.owned == false && pMoney >= ship12.cost){
                    pShip = 12;
                    ship12.owned = true;
                    pMoney -= ship12.cost;
                }

                //select ship 12
                if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && ship12.owned == true){
                    pShip = 12;
                }

                //Back
                if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                    littlemenu = "nothing";
                }
            }
        }
    }
}