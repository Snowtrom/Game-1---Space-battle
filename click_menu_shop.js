function clickShop(){
    if(menu == "shop"){
        if(mouseX >= 520 && mouseX <= 760 && mouseY >= 520 && mouseY <= 580){
            menu = "start";
        }

        if(mouseX >= 538 && mouseX <= 742 && mouseY >= 278 && mouseY <= 492){
            menu = "bullets";
        }

        if(mouseX >= 538 && mouseX <= 742 && mouseY >= 28 && mouseY <= 232){
            menu = "ships";
        }

        //Upgrading health:
        if(mouseX >= 355 && mouseX <= 495 && mouseY >= 15 && mouseY <= 65){
            switch(hpLvl){
                case 0: //cena za lvl1
            
                    if(pMoney >= powerupCost[0]){
                        hpLvl++;
                        hpBonus = 20;
                        pMoney -= powerupCost[0];
                    }else{
                        //izpisva not enough money
                    }

                break;

                
                
                case 1: //cena za lvl2
                    
                    if(pMoney >= powerupCost[1]){
                        hpLvl++;
                        hpBonus = 50;
                        pMoney -= powerupCost[1];
                    }else{
                        //izpisva not enough money
                    }

                break;
                


                case 2: //cena za lvl3
                
                    if(pMoney >= powerupCost[2]){
                        hpLvl++;
                        hpBonus = 100;
                        pMoney -= powerupCost[2];
                    }else{
                        //izpisva not enough money
                    }

                break;



                case 3: //cena za lvl4
                
                    if(pMoney >= powerupCost[3]){
                        hpLvl++;
                        hpBonus = 150;
                        pMoney -= powerupCost[3];
                    }else{
                        //izpisva not enough money
                    }

                break;



                case 4: //cena za lvl5
                
                    if(pMoney >= powerupCost[4]){
                        hpLvl++;
                        hpBonus = 200;
                        pMoney -= powerupCost[4];
                    }else{
                        //izpisva not enough money
                    }

                break;



                case 5: //cena za lvl6
                    if(pMoney >= powerupCost[5]){
                        hpLvl++;
                        hpBonus = 400;
                        pMoney -= powerupCost[5];
                    }else{
                        //izpisva not enough money
                    }
                
                break;



                case 6: //cena za lvl7
                    if(pMoney >= powerupCost[6]){
                        hpLvl++;
                        hpBonus = 650;
                        pMoney -= powerupCost[6];
                    }else{
                        //izpisva not enough money
                    }
                
                break;



                case 7: //cena za lvl8
                    if(pMoney >= powerupCost[7]){
                        hpLvl++;
                        hpBonus = 1000;
                        pMoney -= powerupCost[7];
                    }else{
                        //izpisva not enough money
                    }
                
                break;



                case 8: //cena za lvl9
                    if(pMoney >= powerupCost[8]){
                        hpLvl++;
                        hpBonus = 1400;
                        pMoney -= powerupCost[8];
                    }else{
                        //izpisva not enough money
                    }
            
                break;



                case 9: //cena za lvl10
                    if(pMoney >= powerupCost[9]){
                        hpLvl++;
                        hpBonus = 2000;
                        pMoney -= powerupCost[9];
                    }else{
                        //izpisva not enough money
                    }
                
                break;


                case 10: //da izpisva MAX
                    //Izkacha prozorec na kojto da izpisva "You have reached the maximum level of this power up"
            }
        }
    }


    //Upgrading Body Damage
    if(mouseX >= 355 && mouseX <= 495 && mouseY >= 119 && mouseY <= 169){
        switch(bdLvl){
            case 0: //cena za lvl1
                if(pMoney >= powerupCost[0]){
                    bdLvl++;
                    bdBonus = 10;
                    pMoney -= powerupCost[0];
                }else{
                    //izpisva not enough money
                }
        
            break;



            case 1: //cena za lvl2
                if(pMoney >= powerupCost[1]){
                    bdLvl++;
                    bdBonus = 20;
                    pMoney -= powerupCost[1];
                }else{
                    //izpisva not enough money
                }
        
            break;



            case 2: //cena za lvl3
                if(pMoney >= powerupCost[2]){
                    bdLvl++;
                    bdBonus = 40;
                    pMoney -= powerupCost[2];
                }else{
                    //izpisva not enough money
                }
    
            break;
            
            
            
            case 3: //cena za lvl4
                if(pMoney >= powerupCost[3]){
                    bdLvl++;
                    bdBonus = 60;
                    pMoney -= powerupCost[3];
                }else{
                    //izpisva not enough money
                }
    
            break;
        
        
        
            case 4: //cena za lvl5
                if(pMoney >= powerupCost[4]){
                    bdLvl++;
                    bdBonus = 80;
                    pMoney -= powerupCost[4];
                }else{
                    //izpisva not enough money
                }
    
            break;



            case 5: //cena za lvl6
                if(pMoney >= powerupCost[5]){
                    bdLvl++;
                    bdBonus = 100;
                    pMoney -= powerupCost[5];
                }else{
                    //izpisva not enough money
                }
    
            break;



            case 6: //cena za lvl7
                if(pMoney >= powerupCost[6]){
                    bdLvl++;
                    bdBonus = 150;
                    pMoney -= powerupCost[6];
                }else{
                    //izpisva not enough money
                }
    
            break;
            
            
            
            
            case 7: //cena za lvl8
                if(pMoney >= powerupCost[7]){
                    bdLvl++;
                    bdBonus = 200;
                    pMoney -= powerupCost[7];
                }else{
                    //izpisva not enough money
                }
    
            break;
            
            
            
            
            case 8: //cena za lvl9
                if(pMoney >= powerupCost[8]){
                    bdLvl++;
                    bdBonus = 300;
                    pMoney -= powerupCost[8];
                }else{
                    //izpisva not enough money
                }
    
            break;
            
            
            
            case 9: //cena za lvl10
                if(pMoney >= powerupCost[9]){
                    bdLvl++;
                    bdBonus = 400;
                    pMoney -= powerupCost[9];
                }else{
                    //izpisva not enough money
                }
    
            break;



            case 10: //da izpisva MAX
            //Izkacha prozorec na kojto da izpisva "You have reached the maximum level of this power up"
        }
    }


    //Upgrading attack damage
    if(mouseX >= 355 && mouseX <= 495 && mouseY >= 219 && mouseY <= 269){
        switch(attLvl){
            case 0: //cena za lvl1
                if(pMoney >= powerupCost[0]){
                    attLvl++;
                    attBonus = 20;
                    pMoney -= powerupCost[0];
                }else{
                    //izpisva not enough money
                }

            break;



            case 1: //cena za lvl2
                if(pMoney >= powerupCost[1]){
                    attLvl++;
                    attBonus = 40;
                    pMoney -= powerupCost[1];
                }else{
                    //izpisva not enough money
                }

            break;



            case 2: //cena za lvl3
                if(pMoney >= powerupCost[2]){
                    attLvl++;
                    attBonus = 60;
                    pMoney -= powerupCost[2];
                }else{
                    //izpisva not enough money
                }

            break;




            case 3: //cena za lvl4
                if(pMoney >= powerupCost[3]){
                    attLvl++;
                    attBonus = 80;
                    pMoney -= powerupCost[3];
                }else{
                    //izpisva not enough money
                }

            break;



            case 4: //cena za lvl5
                if(pMoney >= powerupCost[4]){
                    attLvl++;
                    attBonus = 100;
                    pMoney -= powerupCost[4];
                }else{
                    //izpisva not enough money
                }

            break;



            case 5: //cena za lvl6
                if(pMoney >= powerupCost[5]){
                    attLvl++;
                    attBonus = 150;
                    pMoney -= powerupCost[5];
                }else{
                    //izpisva not enough money
                }

            break;



            case 6: //cena za lvl7
                if(pMoney >= powerupCost[6]){
                    attLvl++;
                    attBonus = 200;
                    pMoney -= powerupCost[6];
                }else{
                    //izpisva not enough money
                }

            break;



            case 7: //cena za lvl8
                    if(pMoney >= powerupCost[7]){
                        attLvl++;
                        attBonus = 250;
                        pMoney -= powerupCost[7];
                    }else{
                        //izpisva not enough money
                    }

                break;
            


            case 8: //cena za lvl9
                if(pMoney >= powerupCost[8]){
                    attLvl++;
                    attBonus = 300;
                    pMoney -= powerupCost[8];
                }else{
                    //izpisva not enough money
                }

            break;



            case 9: //cena za lvl10
                if(pMoney >= powerupCost[9]){
                    attLvl++;
                    attBonus = 400;
                    pMoney -= powerupCost[9];
                }else{
                    //izpisva not enough money
                }

            break;



            case 10: //da izpisva MAX
            //Izkacha prozorec na kojto da izpisva "You have reached the maximum level of this power up"
        }
    }



    //Upgrading reload
    if(mouseX >= 355 && mouseX <= 495 && mouseY >= 323 && mouseY <= 373){
        switch(rldLvl){
            case 0: //cena za lvl1
                if(pMoney >= powerupCost[0]){
                    rldLvl++;
                    rldBonus = -1;
                    pMoney -= powerupCost[0];
                }else{
                    //izpisva not enough money
                }

            break;



            case 1: //cena za lvl2
                if(pMoney >= powerupCost[1]){
                    rldLvl++;
                    rldBonus = -2;
                    pMoney -= powerupCost[1];
                }else{
                    //izpisva not enough money
                }

            break;



            case 2: //cena za lvl3
                if(pMoney >= powerupCost[2]){
                    rldLvl++;
                    rldBonus = -3;
                    pMoney -= powerupCost[2];
                }else{
                    //izpisva not enough money
                }

            break;



            case 3: //cena za lvl4
                if(pMoney >= powerupCost[3]){
                    rldLvl++;
                    rldBonus = -4;
                    pMoney -= powerupCost[3];
                }else{
                    //izpisva not enough money
                }

            break;



            case 4: //cena za lvl5
                if(pMoney >= powerupCost[4]){
                    rldLvl++;
                    rldBonus = -5;
                    pMoney -= powerupCost[4];
                }else{
                    //izpisva not enough money
                }

            break;



            case 5: //cena za lvl6
                if(pMoney >= powerupCost[5]){
                    rldLvl++;
                    rldBonus = -6;
                    pMoney -= powerupCost[5];
                }else{
                    //izpisva not enough money
                }

            break;



            case 6: //cena za lvl7
                if(pMoney >= powerupCost[6]){
                    rldLvl++;
                    rldBonus = -7;
                    pMoney -= powerupCost[6];
                }else{
                    //izpisva not enough money
                }

            break;



            case 7: //cena za lvl8
                if(pMoney >= powerupCost[7]){
                    rldLvl++;
                    rldBonus = -8;
                    pMoney -= powerupCost[7];
                }else{
                    //izpisva not enough money
                }

            break;



            case 8: //cena za lvl9
                if(pMoney >= powerupCost[8]){
                    rldLvl++;
                    rldBonus = -9;
                    pMoney -= powerupCost[8];
                }else{
                    //izpisva not enough money
                }

            break;



            case 9: //cena za lvl10
                if(pMoney >= powerupCost[9]){
                    rldLvl++;
                    rldBonus = -10;
                    pMoney -= powerupCost[9];
                }else{
                    //izpisva not enough money
                }

            break;

            case 10: //da izpisva MAX
            //Izkacha prozorec na kojto da izpisva "You have reached the maximum level of this power up"
        }
    }



    //Upgrading money gathering
    if(mouseX >= 355 && mouseX <= 495 && mouseY >= 427 && mouseY <= 477){
        switch(mnyLvl){
            case 0: //cena za lvl1
                if(pMoney >= powerupCost[0]){
                    mnyLvl++;
                    mnyBonus = 5;
                    pMoney -= powerupCost[0];
                }else{
                    //izpisva not enough money
                }

            break;



            case 1: //cena za lvl2
                if(pMoney >= powerupCost[1]){
                    mnyLvl++;
                    mnyBonus = 10;
                    pMoney -= powerupCost[1];
                }else{
                    //izpisva not enough money
                }

            break;



            case 2: //cena za lvl3
                if(pMoney >= powerupCost[2]){
                    mnyLvl++;
                    mnyBonus = 15;
                    pMoney -= powerupCost[2];
                }else{
                    //izpisva not enough money
                }

            break;



            case 3: //cena za lvl4
                if(pMoney >= powerupCost[3]){
                    mnyLvl++;
                    mnyBonus = 20;
                    pMoney -= powerupCost[3];
                }else{
                    //izpisva not enough money
                }

            break;



            case 4: //cena za lvl5
                if(pMoney >= powerupCost[4]){
                    mnyLvl++;
                    mnyBonus = 25;
                    pMoney -= powerupCost[4];
                }else{
                    //izpisva not enough money
                }

            break;



            case 5: //cena za lvl6
                if(pMoney >= powerupCost[5]){
                    mnyLvl++;
                    mnyBonus = 30;
                    pMoney -= powerupCost[5];
                }else{
                    //izpisva not enough money
                }

            break;



            case 6: //cena za lvl7
                if(pMoney >= powerupCost[6]){
                    mnyLvl++;
                    mnyBonus = 35;
                    pMoney -= powerupCost[6];
                }else{
                    //izpisva not enough money
                }

            break;



            case 7: //cena za lvl8
                if(pMoney >= powerupCost[7]){
                    mnyLvl++;
                    mnyBonus = 40;
                    pMoney -= powerupCost[7];
                }else{
                    //izpisva not enough money
                }

            break;



            case 8: //cena za lvl9
                if(pMoney >= powerupCost[8]){
                    mnyLvl++;
                    mnyBonus = 45;
                    pMoney -= powerupCost[8];
                }else{
                    //izpisva not enough money
                }

            break;



            case 9: //cena za lvl10
                if(pMoney >= powerupCost[9]){
                    mnyLvl++;
                    mnyBonus = 50;
                    pMoney -= powerupCost[9];
                }else{
                    //izpisva not enough money
                }

            break;



            case 10: //da izpisva MAX
            //Izkacha prozorec na kojto da izpisva "You have reached the maximum level of this power up"
        }
    }
}