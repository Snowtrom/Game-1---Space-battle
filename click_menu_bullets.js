function clickBullets(){
    if(menu == "bullets"){
        
        
        //Back button 
        if(mouseX >= 540 && mouseX <= 780 && mouseY >= 510 && mouseY <= 560 && littlemenu == "nothing"){
            menu = "shop";  
        }

        
        if(littlemenu == "nothing"){

            //Bullet card 1 click
            if(mouseX >= 242 && mouseX <= 332 && mouseY >= 170 && mouseY <= 260){
                littlemenu = "bullet_card_1";
            }



            //Bullet card 2 click
            if(mouseX >= 353 && mouseX <= 443 && mouseY >= 170 && mouseY <= 260){
                littlemenu = "bullet_card_2";
            }



            //Bullet card 3 click
            if(mouseX >= 464 && mouseX <= 554 && mouseY >= 170 && mouseY <= 260){
                littlemenu = "bullet_card_3";
            }



            //Bullet card 4 click
            if(mouseX >= 575 && mouseX <= 665 && mouseY >= 170 && mouseY <= 260){
                littlemenu = "bullet_card_4";
            }



            //Bullet card 5 click
            if(mouseX >= 686 && mouseX <= 776 && mouseY >= 170 && mouseY <= 260){
                littlemenu = "bullet_card_5";
            }



            //Bullet card 6 click
            if(mouseX >= 20 && mouseX <= 110 && mouseY >= 280 && mouseY <= 370){
                littlemenu = "bullet_card_6";
            }



            //Bullet card 7 click
            if(mouseX >= 130 && mouseX <= 220 && mouseY >= 280 && mouseY <= 370){
                littlemenu = "bullet_card_7";
            }



            //Bullet card 8 click
            if(mouseX >= 241 && mouseX <= 331 && mouseY >= 280 && mouseY <= 370){
                littlemenu = "bullet_card_8";
            }



            //Bullet card 9 click
            if(mouseX >= 352 && mouseX <= 442 && mouseY >= 280 && mouseY <= 370){
                littlemenu = "bullet_card_9";
            }



            //Bullet card 10 click
            if(mouseX >= 463 && mouseX <= 553 && mouseY >= 280 && mouseY <= 370){
                littlemenu = "bullet_card_10";
            }



            //Bullet card 11 click
            if(mouseX >= 574 && mouseX <= 664 && mouseY >= 280 && mouseY <= 370){
                littlemenu = "bullet_card_11";
            }



            //Bullet card 12 click
            if(mouseX >= 685 && mouseX <= 775 && mouseY >= 280 && mouseY <= 370){
                littlemenu = "bullet_card_12";
            }



            //Bullet card 13 click
            if(mouseX >= 20 && mouseX <= 110 && mouseY >= 390 && mouseY <= 480){
                littlemenu = "bullet_card_13";
            }



            //Bullet card 14 click
            if(mouseX >= 130 && mouseX <= 220 && mouseY >= 390 && mouseY <= 480){
                littlemenu = "bullet_card_14";
            }



            //Bullet card 15 click
            if(mouseX >= 241 && mouseX <= 331 && mouseY >= 390 && mouseY <= 480){
                littlemenu = "bullet_card_15";
            }



            //Bullet card 16 click
            if(mouseX >= 353 && mouseX <= 443 && mouseY >= 390 && mouseY <= 480){
                littlemenu = "bullet_card_16";
            }


            //Bullet card 17 click
            if(mouseX >= 464 && mouseX <= 554 && mouseY >= 390 && mouseY <= 480){
                littlemenu = "bullet_card_17";
            }


            //Bullet card 18 click
            if(mouseX >= 575 && mouseX <= 665 && mouseY >= 390 && mouseY <= 480){
                littlemenu = "bullet_card_18";
            }


            //Bullet card 19 click
            if(mouseX >= 686 && mouseX <= 776 && mouseY >= 390 && mouseY <= 480){
                littlemenu = "bullet_card_19";
            }



        }
        
        //Bullet card 1 menu 
        if(littlemenu == "bullet_card_1"){

            //Buy button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && pMoney >= bullet1.cost && bullet1.owned == false){
                bullet1.owned = true;
                pBullet = 1;
                pMoney -= bullet1.cost;
            }


            //Select button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && bullet1.owned == true){
                pBullet = 1;
            }


            //Back button
            if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                littlemenu = "nothing";
            }
        }



        //Bullet card 2 menu 
        if(littlemenu == "bullet_card_2"){

            //Buy button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && pMoney >= bullet1.cost && bullet2.owned == false){
                bullet2.owned = true;
                pBullet = 2;
                pMoney -= bullet2.cost;
            }


            //Select button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && bullet2.owned == true){
                pBullet = 2;
            }


            //Back button
            if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                littlemenu = "nothing";
            }
        }





        //Bullet card 3 menu 
        if(littlemenu == "bullet_card_3"){

            //Buy button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && pMoney >= bullet3.cost && bullet3.owned == false){
                bullet3.owned = true;
                pBullet = 3;
                pMoney -= bullet3.cost;
            }


            //Select button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && bullet3.owned == true){
                pBullet = 3;
            }


            //Back button
            if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                littlemenu = "nothing";
            }
        }





        //Bullet card 4 menu 
        if(littlemenu == "bullet_card_4"){

            //Buy button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && pMoney >= bullet4.cost && bullet4.owned == false){
                bullet4.owned = true;
                pBullet = 4;
                pMoney -= bullet4.cost;
            }


            //Select button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && bullet4.owned == true){
                pBullet = 4;
            }


            //Back button
            if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                littlemenu = "nothing";
            }
        }




        //Bullet card 5 menu 
        if(littlemenu == "bullet_card_5"){

            //Buy button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && pMoney >= bullet5.cost && bullet5.owned == false){
                bullet5.owned = true;
                pBullet = 5;
                pMoney -= bullet5.cost;
            }


            //Select button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && bullet5.owned == true){
                pBullet = 5;
            }


            //Back button
            if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                littlemenu = "nothing";
            }
        }





        //Bullet card 6 menu 
        if(littlemenu == "bullet_card_6"){

            //Buy button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && pMoney >= bullet6.cost && bullet6.owned == false){
                bullet6.owned = true;
                pBullet = 6;
                pMoney -= bullet6.cost;
            }


            //Select button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && bullet6.owned == true){
                pBullet = 6;
            }


            //Back button
            if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                littlemenu = "nothing";
            }
        }





        //Bullet card 7 menu 
        if(littlemenu == "bullet_card_7"){

            //Buy button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && pMoney >= bullet7.cost && bullet7.owned == false){
                bullet7.owned = true;
                pBullet = 7;
                pMoney -= bullet7.cost;
            }


            //Select button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && bullet7.owned == true){
                pBullet = 7;
            }


            //Back button
            if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                littlemenu = "nothing";
            }
        }





        //Bullet card 8 menu 
        if(littlemenu == "bullet_card_8"){

            //Buy button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && pMoney >= bullet8.cost && bullet8.owned == false){
                bullet8.owned = true;
                pBullet = 8;
                pMoney -= bullet8.cost;
            }


            //Select button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && bullet8.owned == true){
                pBullet = 8;
            }


            //Back button
            if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                littlemenu = "nothing";
            }
        }





        //Bullet card 9 menu 
        if(littlemenu == "bullet_card_9"){

            //Buy button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && pMoney >= bullet9.cost && bullet9.owned == false){
                bullet9.owned = true;
                pBullet = 9;
                pMoney -= bullet9.cost;
            }


            //Select button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && bullet9.owned == true){
                pBullet = 9;
            }


            //Back button
            if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                littlemenu = "nothing";
            }
        }





        //Bullet card 10 menu 
        if(littlemenu == "bullet_card_10"){

            //Buy button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && pMoney >= bullet10.cost && bullet10.owned == false){
                bullet10.owned = true;
                pBullet = 10;
                pMoney -= bullet10.cost;
            }


            //Select button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && bullet10.owned == true){
                pBullet = 10;
            }


            //Back button
            if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                littlemenu = "nothing";
            }
        }




        //Bullet card 11 menu 
        if(littlemenu == "bullet_card_11"){

            //Buy button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && pMoney >= bullet11.cost && bullet11.owned == false){
                bullet11.owned = true;
                pBullet = 11;
                pMoney -= bullet11.cost;
            }


            //Select button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && bullet11.owned == true){
                pBullet = 11;
            }


            //Back button
            if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                littlemenu = "nothing";
            }
        }




        //Bullet card 12 menu 
        if(littlemenu == "bullet_card_12"){

            //Buy button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && pMoney >= bullet12.cost && bullet12.owned == false){
                bullet12.owned = true;
                pBullet = 12;
                pMoney -= bullet12.cost;
            }


            //Select button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && bullet12.owned == true){
                pBullet = 12;
            }


            //Back button
            if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                littlemenu = "nothing";
            }
        }



        //Bullet card 13 menu 
        if(littlemenu == "bullet_card_13"){

            //Buy button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && pMoney >= bullet13.cost && bullet13.owned == false){
                bullet13.owned = true;
                pBullet = 13;
                pMoney -= bullet13.cost;
            }


            //Select button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && bullet13.owned == true){
                pBullet = 13;
            }


            //Back button
            if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                littlemenu = "nothing";
            }
        }





        //Bullet card 14 menu 
        if(littlemenu == "bullet_card_14"){

            //Buy button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && pMoney >= bullet14.cost && bullet14.owned == false){
                bullet14.owned = true;
                pBullet = 14;
                pMoney -= bullet14.cost;
            }


            //Select button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && bullet14.owned == true){
                pBullet = 14;
            }


            //Back button
            if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                littlemenu = "nothing";
            }
        }





        //Bullet card 15 menu 
        if(littlemenu == "bullet_card_15"){

            //Buy button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && pMoney >= bullet15.cost && bullet15.owned == false){
                bullet15.owned = true;
                pBullet = 15;
                pMoney -= bullet15.cost;
            }


            //Select button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && bullet15.owned == true){
                pBullet = 15;
            }


            //Back button
            if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                littlemenu = "nothing";
            }
        }




        //Bullet card 16 menu 
        if(littlemenu == "bullet_card_16"){

            //Buy button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && pMoney >= bullet16.cost && bullet16.owned == false){
                bullet16.owned = true;
                pBullet = 16;
                pMoney -= bullet16.cost;
            }


            //Select button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && bullet16.owned == true){
                pBullet = 16;
            }


            //Back button
            if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                littlemenu = "nothing";
            }
        }




        //Bullet card 17 menu 
        if(littlemenu == "bullet_card_17"){

            //Buy button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && pMoney >= bullet17.cost && bullet17.owned == false){
                bullet17.owned = true;
                pBullet = 17;
                pMoney -= bullet17.cost;
            }


            //Select button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && bullet17.owned == true){
                pBullet = 17;
            }


            //Back button
            if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                littlemenu = "nothing";
            }
        }




        //Bullet card 18 menu 
        if(littlemenu == "bullet_card_18"){

            //Buy button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && pMoney >= bullet18.cost && bullet18.owned == false){
                bullet18.owned = true;
                pBullet = 18;
                pMoney -= bullet18.cost;
            }


            //Select button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && bullet18.owned == true){
                pBullet = 18;
            }


            //Back button
            if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                littlemenu = "nothing";
            }
        }




        //Bullet card 19 menu 
        if(littlemenu == "bullet_card_19"){

            //Buy button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && pMoney >= bullet19.cost && bullet19.owned == false){
                bullet19.owned = true;
                pBullet = 19;
                pMoney -= bullet19.cost;
            }


            //Select button
            if(mouseX >= 350 && mouseX <= 500 && mouseY >= 490 && mouseY <= 540 && bullet19.owned == true){
                pBullet = 19;
            }


            //Back button
            if(mouseX >= 600 && mouseX <= 750 && mouseY >= 490 && mouseY <= 540){
                littlemenu = "nothing";
            }
        }
    }
}